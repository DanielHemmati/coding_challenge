# https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/python

"""
i did solve this challenge. But this solution was way more better
"""


def get_sum(a, b):
    return sum(range(min(a, b), max(a, b) + 1))


print(get_sum(1, 2))
