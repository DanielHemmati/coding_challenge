# https://www.codewars.com/kata/5919f3bf6589022915000023/train/python
# i have no idea how i can do this.
# it's good opportunity to learn matrix rotation 🤔
# i didn't solved it, but i could do it with numpy LOOL


def ccw(matrix):
    res = []
    for row in zip(*map(reversed, matrix)):
        print(list(row))
        res.append(list(row))
    return res
    # return [list(row) for row in zip(*map(reversed, matrix))]


def rotated(matrix, times):
    for _ in range(times % 4):
        matrix = ccw(matrix)
    return matrix


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# i like zip, it's really useful
res = zip(*map(reversed, matrix))
for row in res:
    # print(list(res))
    print(list(row))
# y = [4, 5, 6]
# res = list(zip(x, y))
# x2, y2 = zip(*zip(x, y))
# print(list(zip(*zip(x, y)))) # why LOOL
# print(x2)
