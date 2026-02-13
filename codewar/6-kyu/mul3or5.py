# https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/python
def solution(n: int) -> int:
    return sum(i for i in range(n) if i % 3 == 0 or i % 5 == 0)
