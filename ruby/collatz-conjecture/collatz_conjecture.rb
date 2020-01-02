class CollatzConjecture
  def self.steps(num)
    raise ArgumentError if num <= 0

    count = 0
    until num == 1
      num = num.even? ? num / 2 : num * 3 + 1
      count += 1
    end
    count
  end
end
