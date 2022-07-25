# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python


def get_count(s: str) -> int:
    res = 0
    for char in s:
        if char in "aeoiu":
            res += 1

    return res


a = "aeiou"
print(get_count(a))

# ----------------- sol -----------------


def first(s: str) -> int:
    # return [1 for char in s if s in "aeiou"]
    return sum(1 for char in s if s in "aeiou")

# print(first(a))

import re
def second(s:str) -> int:
    return len(re.findall("[aeiou]", s, re.IGNORECASE))

print(second(a))
