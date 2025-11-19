# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

# solved
from collections import Counter


def duplicate_encode(word: str) -> str:
    res = ""
    chars_count = {}

    mini_word = word.lower()

    if len(mini_word) == len(set(mini_word)):
        res += "(" * len(word)
        return res

    for ch in mini_word:
        chars_count[ch] = chars_count.get(ch, 0) + 1

    for ch in mini_word:
        if chars_count[ch] == 1:
            res += "("
        else:
            res += ")"

    return res


a = "diin"
# print(duplicate_encode(a))

# ----------------- others -----------------

# really smart. love it


def second(word: str) -> str:
    return "".join(["(" if word.lower().count(c) == 1 else ")" for c in word.lower()])


def third(word: str) -> str:
    word = word.lower()
    counter = Counter(word)
    return "".join(("(" if counter[c] == 1 else ")") for c in word)


print(third(a))
