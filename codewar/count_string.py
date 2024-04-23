# https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(string: str) -> dict:
    res = {}
    for char in string:
        res[char] = string.count(char)
    return res

print(count("aba"))



def count2(s: str) -> dict:
    res = {}
    for char in s:
        if char in res:
            res[char] = res[char] + 1
        else:
            res[char] = 1
    return res


from collections import Counter

def count3(s: str) -> dict:
    return dict(Counter(s))

print(count3("aba"))
