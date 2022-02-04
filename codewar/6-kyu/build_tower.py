# https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python





def tower_builder(floors):
    tower = []
    for i in range(1, floors + 1):
        space = " " * (floors - i)
        star  = "*" * ((2*i) - 1)
        tower.append(f"{space}{star}{space}")
    return tower

# print(tower_builder(5))
## fun 
def pyramid(rows: int) -> str:
    for i in range(0, rows):
        for j in range(0, i + 1):
            print("*", end=" ")
        print('\r')


# print(pyramid(5))

def left_to_right(rows: int) -> str: 
    k = 2 * rows - 2 #idk
    for i in range(0 , rows):
        # create space 
        for j in range(0, k):
            print(end=" ")

        k = k - 1
        res = []
        for j in range(0, i + 1):
            print("*", end=" ")
        print("\r") # this is new line

# print(left_to_right(5))

# (other solution)
def short(n):
    return [" " * (n - i) + "*" * (2*i - 1) + " " * (n - i) for i in range(1, n+1)]

print(short(5))