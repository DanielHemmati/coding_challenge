# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python


import re


def pig_it(text: str) -> str:
    res = []
    for char in text.split():
        # print(char)
        if bool(re.match(r'\w+', char)):
            res.append(char[1:]+char[0]+"ay")
        else:
            res.append(char)
        # pass
    return " ".join(res)


a = 'Pig latin is cool'
b = "daniel"
print(b.isalpha())

print(pig_it(a))


# solution
def second(text):
    lst = text.split()
    return ' '.join([word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])


""" this is how i did it at first, i used isalpha() but i didn't realize that i have add else too """
