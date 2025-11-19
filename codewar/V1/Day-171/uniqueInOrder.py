# https://www.codewars.com/kata/54e6533c92449cc251001667/train/python
# i coul
def unique_in_order(iter: str):
    res = []
    list_iter = [char for char in iter]
    for index, value in enumerate(list_iter):
        if value != list_iter[index + 1]:
            res.append(value)

    return res


a = "AAAABBBCCDAABBB"
print(a[-1])

# print(unique_in_order(a))
# i don't know this SHIT


def unique_in_order2(iter: str):
    pass
