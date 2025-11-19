# // https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
# https://math.stackexchange.com/questions/1343171/why-only-square-root-approach-to-check-number-is-prime?newreg=5be05d7b845f470d982530a0da679a3a
from math import sqrt


def is_prime(num: int) -> bool:
    if num <= 0:
        return False

    # print(int(sqrt(7)))
    for i in range(2, int(sqrt(num)) + 1):
        print(i)
        if num % i == 0:
            return False

    return num > 1


a = 8
print(is_prime(a))
