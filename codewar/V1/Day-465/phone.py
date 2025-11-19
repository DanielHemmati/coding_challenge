# https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python


def create_phone_number(n):
    array_of_str = map(lambda x: str(x), n)
    one_line = "".join(array_of_str)
    return f"({one_line[:4]}) {one_line[3:6]}-{one_line[6:]}"


a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print(create_phone_number(a))
