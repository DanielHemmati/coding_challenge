# https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/python

def find_outlier(arr):
    odd = list(filter(lambda x: x % 2 != 0, arr))
    even  = list(filter(lambda x: x % 2 == 0, arr))
    return even[0] if len(even) == 1 else odd[0]

a = [1,2,3]
res = list(filter(lambda x: x % 2 != 0, a))
print(res)