class Year
  class << self
    def leap?(arg)
      return false if arg % 4 != 0
      return false if (arg % 100).zero? && !(arg % 400).zero?

      true
    end
  end
end
