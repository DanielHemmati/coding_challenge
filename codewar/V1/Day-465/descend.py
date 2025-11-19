# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python
# i have solev this in JS, but idk how to solve it in python


def descending_order(num):
    # mathy way, but it's not readable
    reverser_order = 0

    while num != 0:
        digit = num % 10
        reverser_order = reverser_order * 10 + digit
        num //= 10


def readable(num):
    return int("".join(sorted(str(num)[::-1], reverse=True)))


print(readable(1234))
a = 123
print(sorted(str(a)))
