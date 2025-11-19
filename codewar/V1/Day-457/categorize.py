# https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python


def open_or_senior(data):
    res = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            res.append("Senior")
        else:
            res.append("Open")
    return res


a = [(45, 12), (55, 21), (19, -2), (104, 20)]
b = [(59, 12), (55, -1), (12, -2), (12, 12)]
print(open_or_senior(a))
print(open_or_senior(b))
