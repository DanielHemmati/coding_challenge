# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

import string
import re


def is_pangram(s):
    clearning_string = re.sub("[^A-Za-z0-9]+", "", "".join(sorted(set(s)))).lower()
    return string.ascii_lowercase in clearning_string

    # if string.ascii_letters


pangram = "The quick, brown fox jumps over the lazy dog!"
print(is_pangram(pangram))
res = re.sub("[^A-Za-z0-9]+", "", pangram).lower()
print(set(string.ascii_lowercase))
