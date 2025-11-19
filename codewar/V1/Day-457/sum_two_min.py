# https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python


def sum_two_smallest_numbers(numbers: list):
    numbers.sort()
    return numbers[0] + numbers[1]


# print(sum_two_smallest_numbers([5, 8, 12, 18, 22]))


# second solution
def foo(numbers: list):
    return sum(sorted(numbers)[:2])


print(foo([5, 8, 12, 18, 22]))

print(len("aaaxbbbbyyhwawiwjjjwwm"))
