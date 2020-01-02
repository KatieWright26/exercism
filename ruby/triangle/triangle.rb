class Triangle
  attr_reader :sides
  def initialize(sides)
    @sides = sides.sort
  end

  def equilateral?
    return true if valid && sides.uniq.count == 1

    false
  end

  def isosceles?
    return true if valid && sides.uniq.count <= 2

    false
  end

  def scalene?
    return true if valid && sides.uniq.count == 3

    false
  end

  def valid
    !sides.min.zero? && (sides.uniq.count == 1 || sides.min(2).sum > sides.max)
  end
end
