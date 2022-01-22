# https://www.codewars.com/kata/551f37452ff852b7bd000139/train/python

from audioop import add


def add_binary(a,b):
        #   bin(int(a,2) + int(b,2))
    return bin(int(str(a), 2) + int(str(b) + 2))


print(add_binary(1,1))