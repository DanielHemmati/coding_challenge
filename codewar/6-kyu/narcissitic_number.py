# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python

def narcissistic(value: int) -> bool:
    digits = list(str(value))
    length_digits = len(digits)
    check = sum([int(i)**length_digits for i in digits])
    return check == value

print(narcissistic(1652))