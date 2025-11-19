# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

# i coudnl't solve it with set() 😆
def array_diff(a, b):
    return [item for item in a if item not in b]


print(array_diff([1, 2], [1]))
