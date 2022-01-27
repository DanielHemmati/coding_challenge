
  
def solution(n):
    if n == 1:
        return 1

    result = (n*n) + (n-1)*(n-1)
    return result


a = 3
# print(solution(a))


def foo(n):
    # sum = n*2 - 1
    # for i in range(1, (n*2)-1, 2):
    #     sum += i*2
    # return sum
    return int((3*n*n - n)/2)

# why this are different?
print(solution(3)) 
print(int((3*3*3 - 3)/2))