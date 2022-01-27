# damn son on a first try
def solution(arr: list):
    res = set()
    for n in range(min(arr), max(arr) + 1):
        res.add(n)
    print(len(res - set(arr)))


a = [6, 2, 4, 8]
# print(solution(a))
b = [2,3,4,5,6,7,8]


# ------------------------------ genius solution ----------------------------- #
def wow(arr: list):
    # just recreate it and you will get the answer
    return max(arr) - min(arr) - len(arr) + 1