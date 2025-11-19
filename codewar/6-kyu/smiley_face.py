# https://www.codewars.com/kata/583203e6eb35d7980400002a/train/python

# solved
def count_smileys(arr):
    if len(arr) == 0:
        return 0

    valid = ":-) :-D :~) :~D ;-) ;-D ;~) ;~D :) :D ;) ;D".split(" ")
    count = 0
    for char in arr:
        if char in valid:
            count += 1

    return count


test = [
    ";-(",
    ":D",
    ";(",
    ";o(",
    ";D",
    ":D",
    ";-D",
    ";-(",
    ":-D",
    ";oD",
    ";D",
    ":-D",
    ":D",
    ";D",
]
# print(count_smileys(test))

# other solutions
import re


def with_regex(arr: list):
    return len(re.findall(r"[;:][-~]?[)D]", " ".join(arr)))


print(with_regex(test))
