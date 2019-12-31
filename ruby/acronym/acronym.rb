module Abbreviated
  def abbreviate(phrase)
    phrase.upcase.scan(/\w+/).map(&:chr).join
  end
end

class Acronym
  extend Abbreviated
end
