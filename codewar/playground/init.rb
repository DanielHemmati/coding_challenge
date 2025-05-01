hash = {
'key1' => 'value1',
'key2' => 'value2',
'key3' => 'value3'
}

array = [1, 2, 3, 4, 5]


array.each do |element|
puts "element: #{element}"
end

puts "-----"

hash.each do |key, value|
puts "key: #{key}, value: #{value}"
end

puts "-----"

doubled = array.map do |element|
element * 2
end

puts "doubled: #{doubled}"

puts "-----"

grade = 'B'

case grade
when 'A'
puts "way to go kid!"
when 'B'
puts 'better luck next time'
else
puts "you failed"
end

puts "-----"


def double(x)
x * 2
end

puts double(2)

puts double 3
puts double(3) + double(3)

puts "-----"

def sum(x, y)
  return x + y
end

puts sum(1, 2)

puts sum 3,4
puts sum(sum(3,4),5 )

puts "-----"
