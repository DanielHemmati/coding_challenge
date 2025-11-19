# https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/python

# i was happy with this sol
def anagrams(word: str, list_of_words: str) -> "list[str]":
    res = []
    for words in list_of_words:
        if "".join(sorted(words)) == "".join(sorted(word)):
            res.append(words)
    return res


a = "abba"
b = ["aabb", "abcd", "bbaa", "dada"]
# print(anagrams(a, b))

# ------------------------------ other solution ------------------------------ #


def second(word, words):
    return list(filter(lambda x: sorted(word) == sorted(x), words))


# print(second(a, b))

from collections import Counter

test = Counter(a)

c = "bbaa"
another = Counter(c)
print(another == test)
