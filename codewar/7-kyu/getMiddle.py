def get_middle(s):
    if not s:
        return ""
    middle = len(s) // 2

    if len(s) % 2 == 0:
        return s[middle] + s[middle - 1]

    return s[middle]


a = "middle"
# print(get_middle(a))

# other solutoin


def second(s: str) -> str:
    return s[(len(s) - 1) // 2 : len(s) // 2 + 1]


# print(second(a))


def third(s: str) -> str:
    middle = (len(s) - 1) // 2
    return s[middle:-middle]


print(third(a))
