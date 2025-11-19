def digitize(n: int):
    return [int(x) for x in str(n)][::-1]


# print(type(digitize(123)))
a = 123
# a_list = [int(x) for x in str(a)][::-1]
print(digitize(a))
