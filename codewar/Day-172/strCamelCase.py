import re

# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python

# couldn't solve it


def to_camel_case(text: str):
    letters_only = re.sub("[^a-zA-Z0-9]", " ", text)
    return letters_only[1:].title()


def lowercase(string):
    return str(string).lower()


def uppercase(string):
    return str(string).upper()


def camel(string: str):
    string = re.sub(r"^[\-_\.]", '', str(lowercase(string)))
    if not string:
        return string
    return lowercase(string[0]) + re.sub(r"[\-_\.\s]([a-z])", lambda matched: uppercase(matched.group(1)), string[1:])


a = "the_stealth_warrior"
b = "daniel hemmati"
# print(camel(a))
# print(re.sub('\s([a-z])', lambda test: print(test), a[1:]))

# --------------------------------- solution --------------------------------- #
s = "good-night-Sam!"
res = s.translate(s.maketrans("-_", "  "))
# print(res)


# that guy solution was for python 2
def camel(txt: str):
    return txt[0] + txt.title().translate(txt.maketrans("-_", "  "))[1:] if txt else txt


# print(camel(s))
def camel(string: str):
    removed = string.replace("-", ' ').replace("_", " ").split()
    if len(removed) == 0:
        return ""
    return removed[0] + "".join(char.capitalize() for char in removed[1:])


print(camel(s))
