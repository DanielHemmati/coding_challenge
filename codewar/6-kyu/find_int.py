# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python


# one shot, maybe there are some built-in method, but
# this is general solution for this.
def find_it(seq: list) -> int:
    if len(seq) == 1:
        return seq[0]
    res = {}
    for item in seq:
        if item not in res:
            res[item] = 1
        else:
            res[item] = res[item] + 1

    for key, value in res.items():
        if value % 2 != 0:
            return key

    return None


a = [10, 10, 10, 1, 1, 1, 1]
print(find_it(a))
# print(a.count(10))

# ---------------- which exactly there is some built-in method --------------- #


def second(seq: list) -> int:
    for item in seq:
        if seq.count(item) % 2 != 0:
            return item


# print(second(a))


def third(seq: list) -> int:
    return [item for item in seq if seq.count(item) % 2 != 0][0]


# print(third(a))


# this is really interesting b/c, if there is odd number of item in a list
# always one of them will remain, but if there is even number all of them
# will be remove
def fourth(seq: list) -> int:
    nums = set()
    for num in seq:
        if num in nums:
            nums.remove(num)
        else:
            nums.add(num)
    print(nums)
    return nums.pop()


b = [1, 1, 1, 2, 2]
print(fourth(b))
