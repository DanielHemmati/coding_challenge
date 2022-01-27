

# a = "daniel"
# count = 0
# for char in a.lower():
#     if char in "aeiou":
#         count += 1

# print(count)

def test(inputStr):
    return sum(inputStr.count(char) for char in ['a', 'e', 'i', 'o', 'u'])


a = "daniel"
# print(a.count("a"))

print(test(a))
