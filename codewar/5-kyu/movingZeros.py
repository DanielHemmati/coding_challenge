# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python


def move_zeros(array):
    zeroList = list(filter(lambda x: x == 0, array))
    removeZero = list(filter(lambda x: x != 0, array))
    return removeZero + zeroList


a =  [1, 2, 0, 1, 0, 1, 0, 3, 0, 1]
print(move_zeros(a))