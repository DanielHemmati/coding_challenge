import math


def is_square(n):
    return n > 0 and math.sqrt(n) % 1 == 0


def find_next_square(sq):
    if is_square(sq):
        return math.pow(math.sqrt(sq) + 1, 2)
    return -1


# print(find_next_square(122))

# -------------------------------- better one -------------------------------- #


def second(sq):
    return (math.sqrt(sq) + 1) ** 2 if math.sqrt(sq) % 1 == 0 else -1


print(second(121))
