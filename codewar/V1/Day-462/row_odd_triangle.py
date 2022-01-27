# https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/python

# we have the number which start of with this equation 
# n*(n-1)+1
def odd_row(n):
    start_number = n*(n-1)+1 
    res = [start_number]
    for num in range(n-1):
        res.append(res[num]+2)

    return res

print(odd_row(1))


