# https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python


def divisors(integer: int) -> list or str:
    res = []
    for i in range(2, integer):
        if integer % i == 0:
            res.append(i)

    return res if len(res) >= 1 else f"{integer} is prime"


# print(divisors(25))


# ----------------- other solution -----------------
# i like this
def second(n: int) -> list or str:
    return [i for i in range(2, n) if n % i == 0] or f"{n} is prime"
    # return [i for i in range(2, n) if n % i == 0]


print(second(13))
