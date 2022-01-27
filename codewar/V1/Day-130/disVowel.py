# https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python
import re


def disemvowel(string):
    """check the link

    Args:
        string (string): [description]
    """
    # return string.sub("/[aeiou]/gi", "")
    # this one is easier
    return "".join(char for char in string if char not in "aeiou")


# print(disemvowel('daniel'))

translation = {97: "X", 98: None}
string = "aaadniel"
print(f"this should be interesting {string.translate(translation)}")
