# https://www.codewars.com/kata/526571aae218b8ee490006f4/train/python
def count_bits(n):
    """find the bits and only count 1

    Args:
        n (number): number
    """
    return len(bin(n).replace("0b", "").replace("0", ""))
    # or
    # return bin(n).count('1')


print(count_bits(22))


def first(n):
    # or this
    count = 0
    while n > 0:
        if n & 1:
            count += 1
        n >>= 1
    return count


print(first(22))
