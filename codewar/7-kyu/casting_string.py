import string


def to_jaden_case(s: str) -> str:
    return string.capwords(s)


a = "daniel hemmati is a good boy"
# print(to_jaden_case(a))


def second(s: str) -> str:
    splitStr = s.split()
    res = []
    for char in splitStr:
        res.append(char[0].upper() + char[1:])

    return " ".join(res)


# print(second(a))


def third(s: str) -> str:
    res = []
    for char in s.split():
        res.append(char.capitalize())
    return " ".join(res)
    # return " ".join(char.capitalize() for char in s.split())


print(third(a))
