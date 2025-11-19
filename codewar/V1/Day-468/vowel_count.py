# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python


def get_count(sentence):
    res = []
    for vowel in sentence:
        if vowel in "aeiou":
            res.append(vowel)

    return len(res)
    # by me 😏
    return len([vowel for vowel in sentence if vowel in "aeiou"])


a = "aeoiu"
print(get_count(a))
