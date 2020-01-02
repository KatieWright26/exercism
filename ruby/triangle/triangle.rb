class Triangle
  attr_reader :sides
  def initialize(sides)
    @sides = sides.sort
  end

  def equilateral?
    return false if sides.min.zero?

    sides.uniq.count == 1
  end

  def scalene?
    return false if sides.min.zero?

    unique_sides = sides.uniq
    return false if unique_sides.count < 3
    return true if (unique_sides.sum - unique_sides.max) > unique_sides.max
  end

  def isosceles?
    return false if sides.min.zero?

    unique_sides = sides.uniq
    is_isosceles = unique_sides.count == 2

    return false if unique_sides.count > 2
    return false if is_isosceles && unique_sides.min * 2 < unique_sides.max

    true
  end
end
