class Matrix
  attr_accessor :rows, :columns
  def initialize(args)
    @rows = args.lines.map { |a| a.split.map(&:to_i) }
    @columns = @rows.transpose
  end
end
