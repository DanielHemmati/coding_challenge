# https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python


def binary_array_to_number(arr):
    return int("".join([str(x) for x in arr]), 2)

a = [1,1,1,1]
# b = [str(x) for x in a]
# res = "".join(b)
# # print(type(res))
# x = int(res, 2)
# print(x)
print(binary_array_to_number(a))
