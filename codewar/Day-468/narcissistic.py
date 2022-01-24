# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python


def narcissistic( value ):
    res = []
    array_of_number = [int(n) for n in str(value)]
    for number in array_of_number:
        res.append(pow(number, len(array_of_number)))
    return sum(res) == value

print(narcissistic(153))