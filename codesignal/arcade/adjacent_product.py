
def solution(inputArray):
    res = []
    
    for i in range(len(inputArray)-1):
        res.append(inputArray[i]*inputArray[i+1])
    return max(res)

inputArray = [3, 6, -2, -5, 7, 3]  # 21+
a = [4, 1, 2, 3, 1, 5]
# print(len(a))
# print(inputArray.index(7))
# print(solution(a))

# ------------------------------- experimenting ------------------------------ #
numbersList = [1, 2, 3]
str_list = ['one', 'two']
# numbers_tuple = ('ONE', 'TWO', 'THREE', 'FOUR')
res = zip(numbersList, str_list)
print(list(res))