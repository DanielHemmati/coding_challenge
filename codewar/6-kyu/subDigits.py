def digital_root(n):
    if len(str(n)) == 1:
        return n

    return digital_root(sum([int(i) for i in str(n)]))


a = 123
res = sum([int(i) for i in str(a)])
print(digital_root(a))

# other solutio


def second(n: int) -> int:
    # i don't know why he wrote it like this
    return (n % 9) or n and 9


# print(second(a))


def third(n: int) -> int:
    res = lambda n: n and (n - 1) % 9 + 1
    return res


print(third(a))

digital_root2 = lambda n: n and (n - 1) % 9 + 1
print(digital_root2(a))
