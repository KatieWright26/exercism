class Prime
  def self.nth(num)
    raise ArgumentError if num < 1
    arr = []
    count = 2
    while arr.length < num
      arr << count if prime?(count)
      count += 1
    end
    arr.max
  end

  def self.prime?(possible_prime)
    count = 2
    while count < possible_prime
      return false if possible_prime % count == 0
      count += 1
    end
    true
  end
end
