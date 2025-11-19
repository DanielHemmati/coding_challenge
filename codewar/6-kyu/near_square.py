# https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/python


def nearest_sq(n):
    # return math.pow(round(math.sqrt(n)), 2)
    # or
    return round(n**0.5) ** 2


print(nearest_sq(11))
