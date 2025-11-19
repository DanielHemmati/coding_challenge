# https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/python


def string_merge(string1, string2, letter):
    left_side = list(string1).index(letter)
    right_side = list(string2).index(letter)
    return string1[:left_side] + letter + string2[right_side + 1 :]


# print(string_merge("coding", "anywhere", "n"))


# this is better
def second_sol(string1, string2, letter):
    return string1[: string1.index(letter)] + string2[string2.index(letter) :]


print(second_sol("coding", "anywhere", "n"))
