# https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python


def reverse_seq(n: int) -> list:
    return list(range(n, 0, -1))


print(reverse_seq(5))  # [5, 4, 3, 2, 1]
print(list(range(5, 0, -1)))
