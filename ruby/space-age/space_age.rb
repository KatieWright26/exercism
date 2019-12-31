EARTH_YEAR = 31_557_600
MECURY_YEAR = 0.2408467
VENUS_YEAR = 0.61519726
MARS_YEAR = 1.8808158
JUPITER_YEAR = 11.862615
SATURN_YEAR = 29.447498
URANUS_YEAR = 84.016846
NEPTUNE_YEAR = 164.79132

class SpaceAge
  attr_reader :on_earth, :on_mercury, :on_venus, :on_mars, :on_jupiter,:on_saturn, :on_uranus, :on_neptune

  def initialize(seconds)
    @on_earth = convert_to_earth_years(seconds)
    @on_mercury = convert_to_earth_years(seconds, MECURY_YEAR)
    @on_venus = convert_to_earth_years(seconds, VENUS_YEAR)
    @on_mars = convert_to_earth_years(seconds, MARS_YEAR)
    @on_jupiter = convert_to_earth_years(seconds, JUPITER_YEAR)
    @on_saturn = convert_to_earth_years(seconds, SATURN_YEAR)
    @on_uranus = convert_to_earth_years(seconds, URANUS_YEAR)
    @on_neptune = convert_to_earth_years(seconds, NEPTUNE_YEAR)
  end

  def convert_to_earth_years(seconds, planet_year = 1)
    (seconds.to_f / EARTH_YEAR).round(2) / planet_year
  end
end
