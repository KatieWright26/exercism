class Proverb
  def initialize(*args, qualifier: '')
    @qualifier = qualifier.empty? ? ' ' : "\s#{qualifier}\s"
    @wants = [*args]
  end

  def to_s
    proverb = []
    @wants.each_with_index do |want, i|
      if i < @wants.length - 1
        proverb << "For want of a #{want} the #{@wants[i + 1]} was lost.\n"
      end
    end
    proverb.join('') + "And all for the want of a#{@qualifier}#{@wants[0]}."
  end
end

