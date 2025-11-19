# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


def accum(s):
    # your code
    res = ""
    for index, char in enumerate(s):
        res += char.upper() + index * char.lower()
        res += "-"
    return res[:-1]


# print(accum("daniel"))


# pythonic way
# but for me is more readable
def second(s):
    return "-".join(char.upper() + char.lower() * index for index, char in enumerate(s))


print(second("daniel"))
