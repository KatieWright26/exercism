class ResistorColorDuo
  COLORS = %w[black brown red orange yellow green blue violet grey white].freeze

  class << self
    def value(args)
      args[0..1].map do |a|
        COLORS.index(a)
      end.join().to_i
    end
  end
end
