# https://www.codewars.com/kata/550498447451fbbd7600041c/train/python

# this is my solution 👇
def comp(a, b):
    if a == None or b == None:
        return False

    res = []
    for item in a:
        if item**2 in b:
            res.append(item**2)

    return True if sum(res) == sum(b) else False


a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 144, 19, 161, 19, 144, 19, 11]
print(a == b)

# solution
# yeah it seems like you can use try/catch a lot in codewar
def second(array1, array2):
    try:
        return sorted([i ** 2 for i in array1]) == sorted(array2)
    except:
        return False


print(second(a))
