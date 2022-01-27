
def solution(year):
    return (year - 1) // 100 + 1



# what if it's not 4 digit?
# print(int(str(a)[:2]))
a = 1999
print(solution(a))