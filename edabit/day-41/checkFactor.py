
# 


def check_factors(factors, num):
    """link above
    Args:
        factors (list): [description]
        num (number): [description]

    Returns:
        boolean: true if all of them are divisible, false otherwise
    """
    for i in factors:
        if num % i != 0:
            return False 
    return True

nubmer_list = range(-5, 5)
less_than_zero = list(filter(lambda x: x < 0, nubmer_list))

# print(check_factors([2, 3, 4], 12))
# print(check_factors([1, 2, 3, 8], 12))
# print(check_factors([1, 2, 50], 100) )
# print(check_factors([3, 6], 9))


