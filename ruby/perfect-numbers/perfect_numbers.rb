class PerfectNumber
  def self.classify(num)
    raise RuntimeError if num < 1

    aliquot_sum = 0
    1.upto(num - 1) { |i| aliquot_sum += i if (num % i).zero? }
    return 'abundant' if aliquot_sum > num
    return 'deficient' if aliquot_sum < num

    'perfect'
  end
end
