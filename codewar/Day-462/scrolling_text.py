# https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/python
from itertools import combinations, permutations


"""
 i couldn't solve this 🥴, i have problem with
 python slice still, in JS i used to slice method
"""

def scrolling_text(text: str):
    text = text.upper()
    res = []
    for char in text:
        # first itself
        res.append(text)
        text = text[1:] + text[0]
    return res


items = "ABC"
# print(tems[1:] + items[0])
# print(items[1:] + items[:1]) 
# print(items[1:])
# print(items[:1])
# print(scrolling_text(items))

# ------------------------------ other solution ------------------------------ #
def second(text: str) -> list:
    return [(text[i:] + text[:i]).upper() for i in range(len(text))]

# print(second("abc"))

def withMap(text: str) -> list:
    # except list and text slicing this is the exact way we write this in JS
    return list(map(lambda x: (text[x:] + text[:x]).upper(), range(len(text))))

print(withMap("ABC"))
