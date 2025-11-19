# https://www.codewars.com/kata/61123a6f2446320021db987d/python

# let's go
def prev_mult_of_three(n):
    if len(str(n)) == 1 and n % 3 != 0:
        return None
    if n % 3 == 0:
        return n
    return prev_mult_of_three(int(str(n)[:-1]))


# print(prev_mult_of_three(1244))

# ---------------------------------- others ---------------------------------- #


def foo(n: int):
    while n % 3:
        print(f"n={n}")
        n //= 10
    return n or None


print(foo(1244))
