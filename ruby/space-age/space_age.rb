EARTH_YEAR = 31_557_600
MECURY_YEAR = 0.2408467
VENUS_YEAR = 0.61519726
MARS_YEAR = 1.8808158
JUPITER_YEAR = 11.862615
SATURN_YEAR = 29.447498
URANUS_YEAR = 84.016846
NEPTUNE_YEAR = 164.79132

class SpaceAge
  def initialize(seconds)
    @seconds = seconds
  end

  def convert_to_earth_years(seconds, planet_year = 1)
    (seconds.to_f / EARTH_YEAR).round(2) / planet_year
  end

  def on_mercury
    @on_mercury = convert_to_earth_years(@seconds, MECURY_YEAR)
  end

  def on_venus
    @on_venus = convert_to_earth_years(@seconds, VENUS_YEAR)
  end

  def on_earth
    @on_earth = convert_to_earth_years(@seconds)
  end

  def on_mars
    @on_mars = convert_to_earth_years(@seconds, MARS_YEAR)
  end

  def on_jupiter
    @on_jupiter = convert_to_earth_years(@seconds, JUPITER_YEAR)
  end

  def on_saturn
    @on_saturn = convert_to_earth_years(@seconds, SATURN_YEAR)
  end

  def on_uranus
    @on_uranus = convert_to_earth_years(@seconds, URANUS_YEAR)
  end

  def on_neptune
    @on_neptune = convert_to_earth_years(@seconds, NEPTUNE_YEAR)
  end
end
