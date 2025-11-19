def grow(arr: list) -> int:
    res = 1
    for i in arr:
        res *= i
    return res


# print(grow([1, 2, 3]))

# ------------------------------ other solution ------------------------------ #
# python also have reduce, let's go


def my_add(a: int, b: int) -> int:
    return a + b


number = [i for i in range(1, 10)]
# print(reduce(my_add, number, 0))
# print(reduce(lambda a, b: a + b, number, 0))
# this one is next level
# print(reduce(add, number))
# print(sum(number))
# print(reduce(mul, number))
# print(reduce(prod, number))
# print(prod(number))

min_value, another_value, *rest = number
# that's really cool
print(rest)
