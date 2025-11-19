import string
import re

# playing the game until i make my own game


def is_pangram(s):
    clearning_string = re.sub("[^A-Za-z0-9]+", "", s)
    print(clearning_string)


pangram = "The quick, brown fox jumps over the lazy dog!"
res = is_pangram(pangram)
print(res)
print(string.ascii_lowercase)
