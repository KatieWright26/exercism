class CollatzConjecture
  class << self
    def steps(arg)
      raise ArgumentError if arg <= 0

      steps = 0
      until arg == 1
        arg = arg.even? ? arg / 2 : arg * 3 + 1
        steps += 1
      end
      steps
    end
  end
end
