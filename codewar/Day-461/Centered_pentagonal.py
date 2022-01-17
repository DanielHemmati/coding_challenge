# https://www.codewars.com/kata/5fb856190d5230001d48d721/train/python

def pentagonal(n):
    if n <= 0:
        return -1
    res = int((5*n*n - 5*n + 2)/2)
    return res
    

print(pentagonal(13416908728730116809))