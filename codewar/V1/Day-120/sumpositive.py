# https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python
def positive_sum(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum += i
    return sum


# print(positive_sum([1, 2, 3]))
# ------------------------------ other solution ------------------------------ #


def positive_sum(arr):
    return sum(x for x in arr if x > 0)


print(positive_sum([1, 2, 3]))
