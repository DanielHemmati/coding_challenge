import math


def square_digits(num):
    res = ""
    for i in str(num):
        res += str(int(math.pow(int(i), 2)))

    return int(res)


# print(square_digits(9119))


def second(num: int) -> int:
    res = ""
    for x in str(num):
        res += str(int(x) ** 2)

    return res


print(second(123))
