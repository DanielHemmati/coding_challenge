

def even_or_odd(number):
    """we have one number decide is it odd or even

    Args:
        number ([number]): number
    """
    if number & 1:
        return "Odd"
    else:
        return "Even"


# print(type(even_or_odd(123)))
# print(even_or_odd(22))

# ------------------------------ other solution ------------------------------ #

def second(number):
    # return "Even" if number % 2 == 0 else "Odd"
    # or
    return "Odd" if number & 1 == 1 else "Even"


print(second(123))
