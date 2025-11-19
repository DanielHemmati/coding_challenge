# // https://www.codewars.com/kata/513e08acc600c94f01000001/train/python


def toHex(d: int):
    return format(max(0, min(255, d)), "02x").upper()


def rgb(r, g, b):
    return f"{toHex(r)}{toHex(g)}{toHex(b)}"


print(rgb(123, 110, 41))

# not good
a = 255
print(("0" + hex(255))[-2:])

# hlelo thre how are you, are we logggin something in here
# how about right now
