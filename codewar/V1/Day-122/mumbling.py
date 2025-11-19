# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


# your boy solve it
def accum(s):
    res = []
    for index in range(len(s)):
        res.append(s[index].upper() + s[index].lower() * index)

    return "-".join(res)


test = "abc"

# print(accum("MjtkuBovqrU"))


def accum2(s):
    return "-".join(c.upper() + c.lower() * i for i, c in enumerate(s))


print(accum2("test"))
