
# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python
def find_short(s):
    # your code here
    return len(sorted(s.split(), key=len)[0])


a = "many fancy word hello hi"
# print(a.split())
# print(find_short(a))


def second_solution(s):
    # this is much better
    return min(len(x) for x in s.split())


# print(list(len(x) for x in a.split()))

# print(second_solution(a))

def third_solution(s):
    return min(map(len, s.split()))


print(third_solution(a))
