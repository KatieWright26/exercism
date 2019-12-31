class Acronym
  class << self
    def abbreviate(phrase)
      phrase.upcase.scan(/\w+/).map { |word| word[0] }.join
    end
  end
end
