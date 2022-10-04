# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

def duplicate_count(text: str) -> int:
    obj = {}
    text = text.lower()
    for char in text:
        if char in obj:
            obj[char] += 1
        else:
            obj[char] = 1

    hold_duplicate = []
    for key in obj:
        if obj[key] > 1:
            hold_duplicate.append(key)

    return 0 if len(hold_duplicate) == 0 else len(hold_duplicate)

a = "abcde"
b = "abcdeaa"

# print(duplicate_count(b))

# --------------------------------- other sol -------------------------------- #
# i always forget this count method, this is really nice 
def second(text: str) ->int:
    count = 0
    for char in set(text.lower()):
        if text.lower().count(char) >1:
            count += 1
    return count
