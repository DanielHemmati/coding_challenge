import requests


def multi_table(n: int):
    table = [f'{i} * {n} = {i * n}' for i in range(1, 11)]
    return "\n".join(table)


print(multi_table(5))
