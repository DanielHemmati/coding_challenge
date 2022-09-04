# https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python

import re 
def valid_braces(string: str) -> bool:
    while "()" in string or "[]" in string or "{}" in string:
        string = string.replace("()", "").replace("[]", "").replace("{}", "")
    return not string

a = "[]"
b = "{}()[]"
print(valid_braces(b))