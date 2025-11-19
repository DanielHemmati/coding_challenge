# https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python


def remove_char(s: str) -> str:
    return s[1 : len(s) - 1]


a = "daniel"
print(remove_char(a))
