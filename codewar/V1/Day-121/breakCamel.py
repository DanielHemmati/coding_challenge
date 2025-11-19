# https://www.codewars.com/kata/5208f99aee097e6552000148/train/python

import re


def solution(s):
    return re.sub(r"([A-Z])", r" \g<1>", s)
    # or this
    # return re.sub(r"([A-Z])", r" \1", s)


# print(solution("danielHemmati"))

# ------------------------------- with for loop ------------------------------ #


def solution2(s):
    res = ""
    letter = [char for char in s]
    for i in range(len(letter)):
        if letter[i] == letter[i].upper():
            res += " " + letter[i]
        else:
            res += letter[i]
    return res


print(solution2("danielHemmati"))


test = "some string in here"
res = [char for char in test]
print(range(len(test)))
