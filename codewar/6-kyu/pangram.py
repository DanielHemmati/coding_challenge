
import string
import re


def is_pangram(s):
    res = re.sub("[^a-zA-Z]", "", s)
    return True if len(set(res.lower())) == 26 else False


pangram = "The quick, brown fox jumps over the lazy dog!"
# a = re.sub("[^a-zA-Z]+", "", pangram)
# print(set(a.lower()))
print(is_pangram(pangram))

# --------------------------------- learning --------------------------------- #
def foo(s: str):
    s = s.lower()
    for char in set(string.ascii_lowercase):
        if char not in s:
            return False 
    return True 

print(foo(pangram))
