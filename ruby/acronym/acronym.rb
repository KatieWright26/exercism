class Acronym
  class << self
    def abbreviate(phrase)
      phrase.sub!('-', ' ')
      phrase.upcase.split(' ').map { |p| p[0] }.join
    end
  end
end
