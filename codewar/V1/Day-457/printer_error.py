# https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python

# this is hard for me 🥴
from re import sub


def printer_error(s):
    not_allowed = "nopqrstuvwxyz"
    count = 0
    for char in s:
        if char in not_allowed:
            count += 1
    return str(f"{count}/{len(s)}")


# print(printer_error('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))
# print(printer_error('kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu'))
# print([x for x in "mnopqrstuvwxyz"])
# print(len("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
# print(len("mmmmmmmmmmmmmmmmmmmxyz"))


# this is way more elegant
def printer_error2(s):
    return "{}/{}".format(len(sub("[a-m]", "", s)), len(s))


# love it
print(printer_error2("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
