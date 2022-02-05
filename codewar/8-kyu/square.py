
# for fun 

def square_num(n: list[int]) -> int:
    # return sum([pow(item, 2) for item in n])
    return sum(pow(item, 2) for item in n)

print(square_num([1,2]))
