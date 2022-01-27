# https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python

def remove_char(s):
    return s[1:-1]


test = "daniel"
# print(test[1:-1])
# print(remove_char(test))

# ------------------------------ other solution ------------------------------ #


def second(s):
    # this tabnine is so fukcing amazing
    return "" if len(s) <= 2 else s[1:-1]


print(second(test))
