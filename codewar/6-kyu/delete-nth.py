from collections import Counter
import re

# i have a order problem, i will see the solution
def delete_nth(order: list, max_e: int) -> list:
    res = []
    for item, count in Counter(order).items():
        if count > max_e:
            res.append(item)

    for i in res:
        order.remove(i)
    
    return order

# print()

# ------------------------------- count method ------------------------------- #
def count_method(order: list, max_e: int) -> list:
    answer = []
    for i in order:
        print(f"i={i}")
        print(answer.count(i))
        if answer.count(i) < max_e:
            answer.append(i)

    return answer

# perfect i learn something
print(count_method([20, 37, 20, 21], 1))