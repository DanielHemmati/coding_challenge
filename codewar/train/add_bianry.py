def add_binary(a: int, b: int) -> str:
    return bin(a + b).replace("0b", "")


print(type(add_binary(1, 1)))
