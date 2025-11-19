# https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python
import math


def litres(time: int) -> int:
    return math.floor(time * 0.5)


print(litres(3))
