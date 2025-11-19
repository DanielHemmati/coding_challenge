# https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python


def sort_array(source_array: list) -> list:
    odd_num = sorted([x for x in source_array if x % 2 != 0])
    c = 0
    res = []
    for i in source_array:
        if i % 2 != 0:
            res.append(odd_num[c])
            c += 1
        else:
            res.append(i)
    return res


a = [5, 8, 6, 3, 4]
# print(sort_array(a))

# ------------------- let's see if there is better solution ------------------ #


# this is next level, love it
def second(source_array: list) -> list:
    result = sorted([i for i in source_array if i % 2 == 1])
    for index, item in enumerate(source_array):
        if item % 2 == 0:
            result.insert(index, item)
    return result


a = [5, 8, 6, 3, 4]
# print(second(a))
