# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/python

import re


def validate_pin(pin):
    return bool(re.fullmatch("\d{4}|\d{6}", pin))
