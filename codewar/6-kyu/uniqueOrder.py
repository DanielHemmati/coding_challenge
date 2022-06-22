# https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/python


def unique_in_order(string: str) -> str:
    res = []
    for i in range(0, len(string) - 1):
        if string[i-1] != string[i]:
            res.append(string[i])

    return res


set_example = "AAAABBBCCDAABBB"
# print(unique_in_order(set_example))


# solution 

def second(string: str) -> str:
    newList = []
    for char in string:
        print(len(newList))
        if len(newList) < 1 or not char == newList[len(newList) - 1]:
            newList.append(char)
    return newList


# print(second(set_example))


def third(string: str) -> str:
    res = []
    for item in string:
        if len(res) == 0 or item != res[-1]:
            res.append(item)

    return res

# print(third(set_example))


# i really like this
# https://www.youtube.com/watch?v=jijYnDqhY9w => watch this for more info
from itertools import groupby
def fourth(string: str) -> str:
    res = []
    for key, _ in groupby(string): 
        res.append(key)
    print(res)



# print(fourth(set_example))


# this is a really nice sol
def fifth(string: str) -> str:
    result = []
    prev = None
    for char in string:
        if char != prev:
            result.append(char)
            prev = char 

    return result

print(fifth(set_example))

