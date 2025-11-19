# https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/python
"""
we are given an list of number and we should turn it into wave sorting
e.x: [4, 1, 7, 5, 6, 2, 3] => wave sorted, why?
4 >=1, 1 <= 7, 7 >=5, 5<=6, 6>=2, 2<=3
basically sorted it in a weird way
"""


# solved, but ugly again
def wave_sort(a: list) -> list:
    if len(a) == 0:
        return []

    if len(a) == 1:
        return a

    if a[0] <= a[1]:
        a[0], a[1] = a[1], a[0]

    for index in range(len(a) - 1):
        if index % 2 == 0 and not (a[index] >= a[index + 1]):
            a[index], a[index + 1] = a[index + 1], a[index]

        if index % 2 != 0 and not (a[index] <= a[index + 1]):
            a[index], a[index + 1] = a[index + 1], a[index]

    return a


a = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]
# print(wave_sort(a))


# ------------------------------ other solution ------------------------------ #
# yeah this solution is way better :astonished:
def better(a: list) -> list:
    a.sort()
    for index in range(0, len(a), 2):
        a[index], a[index - 1] = a[index - 1], a[index]
    return a


print(better(a))
