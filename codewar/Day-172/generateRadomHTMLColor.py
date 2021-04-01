from random import randint

test = ["danile", "hemmati", "howdy"]
# print(test[randint(0, len(test))])


# here we go write
def generate_random():
    char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    res = "#"
    i = 1
    while i <= 6:
        res += str(char[randint(0, len(char))])
        i += 1
    return res


print(generate_random())
