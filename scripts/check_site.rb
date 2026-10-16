require "cgi"
require "uri"
require "yaml"

root = File.expand_path("../_site", __dir__)
base = YAML.load_file(File.expand_path("../_config.yml", __dir__))["baseurl"]
errors = []
files = Dir.glob("#{root}/**/*.html")
raise "No generated HTML found" if files.empty?
files.each do |file|
  html = File.read(file, encoding: "UTF-8")
  ids = html.scan(/\bid="([^"]+)"/).flatten
  ids.tally.each { |id, count| errors << "#{File.basename(file)}: duplicate id #{id}" if count > 1 }
  html.scan(/\b(href|src)="([^"]+)"/).each do |attribute, value|
    value = CGI.unescapeHTML(value)
    next if value.match?(%r{\A(?:https?:|mailto:|data:|//)})
    path, fragment = value.split("#", 2)
    path = URI::DEFAULT_PARSER.unescape(path.split("?", 2).first.to_s)
    target = if path.empty?
      file
    elsif path.start_with?(base + "/")
      File.join(root, path.delete_prefix(base + "/"))
    elsif path.start_with?("/")
      errors << "#{File.basename(file)}: URL missing repository prefix: #{value}"
      next
    else
      File.expand_path(path, File.dirname(file))
    end
    target = File.join(target, "index.html") if File.directory?(target)
    unless File.file?(target)
      errors << "#{File.basename(file)}: missing #{attribute} #{value}"
      next
    end
    if fragment && !fragment.empty? && target.end_with?(".html")
      target_html = File.read(target, encoding: "UTF-8")
      id = URI::DEFAULT_PARSER.unescape(fragment)
      errors << "#{File.basename(file)}: missing anchor #{value}" unless target_html.include?("id=\"#{id}\"")
    end
  end
end
abort errors.join("\n") unless errors.empty?
puts "Checked #{files.length} pages: local links, image paths, heading anchors, and unique IDs passed."
