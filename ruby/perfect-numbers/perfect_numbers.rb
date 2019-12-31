PERFECT = 'perfect'.freeze
DEFICIENT = 'deficient'.freeze
ABUNDANT = 'abundant'.freeze

class PerfectNumber
  class << self
    def classify(num)
      raise RuntimeError if num < 1

      aliquot_sum = 0
      1.upto(num - 1) { |i| aliquot_sum += i if (num % i).zero? }
      return ABUNDANT if aliquot_sum > num
      return DEFICIENT if aliquot_sum < num

      PERFECT
    end
  end
end
