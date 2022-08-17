# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a: list, b: list) -> list:
    res = []
    for item in a:
        if item not in b:
            res.append(item)
    
    # return res
    return [item for item in a if item not in b]



a = [1,2,2,2,3]
b = [2]
print(array_diff(a,b))
