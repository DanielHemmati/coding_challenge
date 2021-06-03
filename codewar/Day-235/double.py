
def maps(x):
    return [i*2 for i in x]


def second(x):
    # return map(lambda x: x*2, x)
    return list(map(lambda x: 2*x, x))


s = [1, 2, 3]
print(second(s))

# this one is really cool
for ch in map(chr, [65, 66, 67, 68]):
    print(ch)
