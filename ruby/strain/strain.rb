class Array
  def keep
    result = []
    self.map { |s| result << s if yield(s) }
    result
  end

  def discard
    result = []
    self.map { |s| result << s unless yield(s) }
    result
  end
end
