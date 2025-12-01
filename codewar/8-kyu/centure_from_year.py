# https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python
import math


def century(year: int) -> int:
    return (year + 99) // 100


def second(year: int) -> int:
    return math.ceil(year / 100)
