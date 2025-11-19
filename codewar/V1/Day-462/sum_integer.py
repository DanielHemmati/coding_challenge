# https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/python
import re


def sum_of_integers_in_string(s):
    return sum(list(map(int, re.findall(r"\d+", s))))


txt = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
res = re.findall(r"\d+", txt)
# print(sum([int(to_num) for to_num in res]))
# print(list(map(int, res)))
print(sum_of_integers_in_string(txt))
