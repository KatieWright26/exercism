class Array
  def accumulate
    result = []
    self.map { |s| result << yield(s) }
    result
  end
end