class Palindromes
  attr_accessor :palindromes, :value, :factors
  def initialize(max_factor: 0, min_factor: 1)
    @max_factor = max_factor
    @min_factor = min_factor
  end

  def generate
    arr = []
    for i in @min_factor..@max_factor do
      for j in @min_factor..@max_factor do
        arr << i * j
      end
    end
    @palindromes = arr.uniq
  end

  def largest
    @palindromes = @palindromes.filter { |p| p.to_s == p.to_s.reverse }
    @value = @palindromes.max
    # TO DO
    # @factors = factory(@value)
    self
  end

  def smallest
    @palindromes = @palindromes.filter { |p| p.to_s == p.to_s.reverse }
    @value = @palindromes.min
    # TO DO
    # @factors = factory(@value)
    self
  end
end

