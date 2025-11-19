# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python
import string


# i like the way i made this
def make_dict_alphabet():
    list_string = string.ascii_lowercase
    res = {}
    for index, char in enumerate(list_string):
        res[char] = index + 1
    return res


def high(x: str) -> str:
    dict_alphabet = make_dict_alphabet()
    res = {}
    for index, char in enumerate(dict_alphabet):
        for word in x:
            if word in char:
                res[char] = x.count(char) * (ord(char) - 96)
    print(res)


alphabet = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}


# my solution
def test(string: str):
    string = string.split(" ")
    res = []
    for word in string:
        count = 0
        letters_in_word = list(word)
        for char in letters_in_word:
            count += ord(char) - 96
        res.append(count)
    return string[string.index(max(string))]


b = "man i need a taxi up to ubud"
aa = "aa xx bb"
print(test(b))


# for me is too long, for this dude is in one line
# this is crazy
def oneLine(string: str):
    return max(string.split(), key=lambda k: sum(ord(c) - 96 for c in k))


print(oneLine(b))
