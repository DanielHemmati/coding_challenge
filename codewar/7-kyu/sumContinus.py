from typing import List
from itertools import accumulate


def sum_consecutives(s: List[int]):
    return list(accumulate(s))


a = [1, 2, 3, 4, 5]
# print(sum_consecutives(a))


def second(s: List[int]):
    a = [s[0]]
    for i in range(1, len(s)):
        a.append(a[i - 1] + s[i])
    return a


print(second(a))
