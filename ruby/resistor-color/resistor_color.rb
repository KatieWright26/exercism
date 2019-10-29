class ResistorColor
  COLORS = %w[
    black brown red orange yellow green blue violet grey white
  ].freeze

  class << self
    def color_code(arg)
      COLORS.find_index { |color| color == arg }
    end
  end
end
