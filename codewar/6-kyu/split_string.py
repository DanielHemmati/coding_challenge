
a_string = "abcde"

n = 2
split_strings = [a_string[index : index + n] for index in range(0, len(a_string), n)]

split_strings[len(split_strings) - 1] += "_"
print(split_strings)
