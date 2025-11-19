# https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python


def filter_list(l: list):
    return list(filter(lambda x: True if type(x) == int else False, l))


# ----------------------------------- other ---------------------------------- #
def second(l: list) -> list:
    return [i for i in l if isinstance(i, int)]


a = [1, 2, "a", "b"]
print(second(a))
