import re

# https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python


def no_space(x):
    return re.sub(r"\s", "", x)


# print(no_space('daniel hemmati9'))

# let's see if there an easier way


def no_space2(x):
    return x.replace(" ", "")


# print(no_space2('daniel hemmati hello theree'))

song = "cold, cold, cold, cold heart"
print(song.replace("cold", "hard", 2))
