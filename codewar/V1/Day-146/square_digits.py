# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python


def square_digits(num):
    str_n = list(str(num))
    for number in str_n:
        # print(int(number) ** 2, end="")
        res += int(number) ** 2 + ""
    return res


x = 9119
print(square_digits(x))
