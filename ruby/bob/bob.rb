class Bob
  class << self
    def hey(r)
      remark = r.strip
      is_shouting = remark == remark.upcase && remark.count("a-zA-Z") > 0
      is_a_question = remark.end_with?('?')
      is_empty = remark.length.zero?

      return 'Fine. Be that way!' if is_empty
      return 'Calm down, I know what I\'m doing!' if is_a_question && is_shouting
      return 'Whoa, chill out!' if is_shouting
      return 'Sure.' if is_a_question

      'Whatever.'
    end
  end
end