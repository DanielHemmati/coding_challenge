
def solution(sequence):
    print(sorted(sequence) == sorted(sequence))

a = [1, 3, 2, 1]
print(solution(a))

# def isAscending(arr: list):
#     previous = arr[0]

#     for number in arr:
#         print(number < previous)
#         if number < previous:
#             return False
#         previous = number

#     return True

# print(isAscending(a))