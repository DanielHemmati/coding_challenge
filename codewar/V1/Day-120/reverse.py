# https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/python`

def solution(string):
    return string[::-1]


test = "daniel"
# print("".join(reversed(test)))
print(solution(test))
# print(">".join(["1", "2", "3", "4"]))

# now let's do it with for loopss
# this also work


def second(string):
    res = ""
    for i in reversed(string):
        print(i)

        res += i

    return res


print(second("daneil"))
