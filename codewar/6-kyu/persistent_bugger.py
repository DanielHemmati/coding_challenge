# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

from functools import reduce


def persistence(n: int) -> int:
    if n < 10:
        return 0

    count = 0
    while n >= 10:
        n = reduce(lambda acc, x: acc * x, list(map(int, str(n))))
        count += 1

    return count


# print(persistence(39))
