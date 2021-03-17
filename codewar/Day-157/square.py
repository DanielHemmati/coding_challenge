
import math
# https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python


def is_square(n):
    if n == -1:
        return False
    return math.sqrt(n).is_integer()


# this one is bette
def better_solution(n):
    return n > -1 and math.sqrt(n) % 1 == 0
