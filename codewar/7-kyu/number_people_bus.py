# https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

def number(bus_stops: "list[int]") -> int:
    res = 0
    for i in range(len(bus_stops)):
        res += bus_stops[i][0]
        res -= bus_stops[i][1]

    return res

a = [[10,0],[3,5],[5,8]]
# print(number(a))

# --------------------------------- solutions -------------------------------- #
# nice
def second(arr):
    return sum([stop[0] - stop[1] for stop in arr])

print(second(a))