# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python


import numbers


def high_and_low(numbers: str) -> str:
    number_string = numbers.split()
    list_number = []
    for i in number_string:
        list_number.append(int(i))

    # or list_number = [int(i) for i in numbers.split()]
    highest = max(list_number)
    lowest = min(list_number)

    return f"{highest} {lowest}"


a = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
print(high_and_low(a))

# other solution


def second(n: str) -> str:
    # i add that reversed part
    nums = sorted(n.split(), key=int, reverse=True)
    return '{} {}'.format(nums[0], nums[-1])


print(second(a))
