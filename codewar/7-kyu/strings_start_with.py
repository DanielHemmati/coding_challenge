# https://www.codewars.com/kata/5803a6d8db07c59fff00015f/train/python

def starts_with(st: str, prefix: str) -> str:
    return st.startswith(prefix)

print(starts_with("hello", "hello daniel"))
# print("python".startswith("python is fun"))

print("Python is fun".startswith("Python"))
