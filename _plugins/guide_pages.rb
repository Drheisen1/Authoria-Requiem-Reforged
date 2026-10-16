require "cgi"
require "uri"

# The repository documents remain the single source of truth. Only their
# presentation and internal URLs change in the generated website.
module Authoria
  GUIDES = {
    "InstallationGuide.md" => ["installation", "Installation guide", "Requirements, prerequisites, preparation, downloading, and installation."],
    "PostInstallationGuide.md" => ["post-installation", "Post-installation & Official Options", "First-launch preparation, configuration, and the optional features included with Authoria."],
    "GameplayGuide.md" => ["gameplay", "Gameplay guide", "Find your footing in Requiem. Character setup, progression, survival, combat, and exploration."],
    "SafeCustomizationGuide.md" => ["safe-customization", "Safe Customization Practices", "Rule 11 preparation: profiles, isolated changes, compatibility checks, and rollback habits."],
    "Authoria_Tool_Running_Guide.md" => ["tools", "Tool running guide", "Regenerate outputs after modifying the list. Step-by-step instructions for BodySlide, Pandora, Reqtificator, and LOD tools."],
    "PerformanceProfileGuide.md" => ["performance-profile", "Performance Profile Guide", "Placeholder for Authoria 2.9.10. Configuration details and instructions will be added later."],
    "Changelog.md" => ["changelog", "Changelog", "Release notes, additions, and fixes. Check each version’s save compatibility before updating."]
  }.freeze

  def self.plain(html)
    CGI.unescapeHTML(html.gsub(/<[^>]*>/, "")).strip
  end

  def self.slug(text)
    text.downcase.gsub(/[^\p{L}\p{N}\p{M}\-_\s]/, "").gsub(/\s/, "-")
  end

  class GuidePages < Jekyll::Generator
    safe false
    priority :low

    def generate(site)
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      base = site.baseurl.to_s
      GUIDES.each do |file, (key, title, description)|
        markdown = File.read(File.join(site.source, file), encoding: "UTF-8").gsub("\r\n", "\n")
        if key != "changelog"
          markdown.sub!(/\A# [^\n]*\n/, "")
          markdown.sub!(/^## (Contents|Index)\n.*?(?=^## (?!Contents|Index))/m, "")
        else
          # Older notes contain mismatched HTML disclosure tags. Rebuild the
          # disclosures around complete releases after Markdown conversion.
          markdown.gsub!(/<summary\b[^>]*>.*?<\/summary>/m, "")
          markdown.gsub!(/<\/?details\b[^>]*>/, "")
          markdown.gsub!(/^\#{1,2} (.+)$/) do
            text = Regexp.last_match(1)
            text.include?("Authoria - Requiem Reforged Version") ? "## #{text}" : "### #{text}"
          end
        end
        markdown.gsub!(/<details>/, '<details markdown="1">')
        markdown.gsub!(/<summary>/, '<summary markdown="0">')
        html = converter.convert(markdown)
        counts = Hash.new(0)
        toc = []
        html.gsub!(/<h([1-6])(?:\s[^>]*)?>(.*?)<\/h\1>/m) do
          match = Regexp.last_match
          level, inner = match[1].to_i, match[2]
          level = 3 if level == 1
          inside_details = match.pre_match.scan(/<details\b/).length > match.pre_match.scan(/<\/details>/).length
          label = Authoria.plain(inner)
          slug = Authoria.slug(label)
          id = counts[slug].zero? ? slug : "#{slug}-#{counts[slug]}"
          counts[slug] += 1
          include_in_toc = key == "changelog" ? label.include?("Authoria - Requiem Reforged Version") : level <= 3 && !inside_details
          if include_in_toc
            toc_label = key == "changelog" ? label.sub("Authoria - Requiem Reforged Version ", "Version ") : label
            toc << {"id" => id, "label" => CGI.escapeHTML(toc_label), "level" => level}
          end
          "<h#{level} id=\"#{id}\">#{inner}<a class=\"heading-anchor\" href=\"##{id}\" aria-label=\"Link to #{CGI.escapeHTML(label)}\">#</a></h#{level}>"
        end
        if key == "changelog"
          release_number = 0
          html.gsub!(/(<h2\b[^>]*>Authoria - Requiem Reforged Version .*?<\/h2>)(.*?)(?=<h2\b[^>]*>Authoria - Requiem Reforged Version |\z)/m) do
            heading, notes = Regexp.last_match(1), Regexp.last_match(2)
            release_number += 1
            release_number == 1 ? "#{heading}#{notes}" : "#{heading}<details><summary>Full release notes</summary>#{notes}</details>"
          end
        end
        html.gsub!(%r{https://github\.com/Drheisen1/Authoria-Requiem-Reforged/(?:blob|edit)/main/([^"#?\s<>]+)}) do |url|
          target = URI::DEFAULT_PARSER.unescape(Regexp.last_match(1))
          if target == "README.md"
            "#{base}/"
          else
            GUIDES.key?(target) ? "#{base}/#{GUIDES[target][0]}.html" : url
          end
        end
        html.gsub!(%r{https://raw\.githubusercontent\.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/}, "#{base}/Resources/")
        GUIDES.each do |source, (target, *)|
          html.gsub!(/href="#{Regexp.escape(source)}(?=["#])/, "href=\"#{base}/#{target}.html")
        end
        html.gsub!(/<img\b([^>]*?)\s*\/?\s*>/m) do
          attrs = Regexp.last_match(1).sub(/\s*\/\z/, "")
          attrs = attrs.gsub(/\s(?:width|height)="[^"]*"/, "")
          attrs.sub!(/alt="(?:Screenshot|image)"/, 'alt="Tool settings screenshot"')
          src = attrs[/src="([^"]+)"/, 1]
          "<a class=\"image-zoom\" href=\"#{src}\" aria-label=\"Enlarge screenshot\"><img#{attrs} loading=\"lazy\" decoding=\"async\"></a>"
        end
        html.gsub!(/<table(.*?)>(.*?)<\/table>/m, '<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable reference table"><table\1>\2</table></div>')
        page = Jekyll::PageWithoutAFile.new(site, site.source, "", "#{key}.html")
        page.content = html
        page.data.merge!("layout" => "guide", "title" => title, "description" => description,
                         "key" => key, "source_file" => file, "toc" => toc)
        site.pages << page
      end
    end
  end
end
