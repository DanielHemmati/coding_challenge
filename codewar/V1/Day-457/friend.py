# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python


def friend(x):
    return [f for f in x if len(f) == 4]


a = ["Ryan", "Jimmy", "123", "4", "Cool Man"]
print(list(filter(lambda x: len(x) == 4, a)))
print(friend(a))
