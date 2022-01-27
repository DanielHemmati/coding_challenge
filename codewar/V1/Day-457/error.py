
def open_or_senior(data):
    res = []
    print(data)
    count = 0
    for age, handicap in dict(data).items():
        count += 1
        print(count)
        print(f"age={age} and handicap={handicap}")
        if age >= 55 and handicap > 7:
            res.append("Senior")
        else:
            res.append("Open")
    return res


a = [(59, 12), (55, -3), (12, -2), (12, 12)]
b = [(45, 12), (55, 21), (19, -2), (104, 20)]
# for age, handicap in dict(a).items():
    # for a it just loop for three times WHAT THE HELL
    # print(f"for b age={age} and handicap={handicap}")

# lol this is way better
for age, handicap in a: 
    print(f"for b age={age} and handicap={handicap}")

