# https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python

def fake_bin(x: "list[str]") -> str:
    return "".join(["0" if int(item) < 5 else "1" for item in x])


a = "6611"
print(fake_bin(a))

# ----------------------------------- other ---------------------------------- #
def second(x):
    # i don't trust comparing string with number, generally
    return ''.join('0' if c < '5' else '1' for c in x)