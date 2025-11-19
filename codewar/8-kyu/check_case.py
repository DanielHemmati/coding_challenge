# https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/python
import re


# for fun
def has_number(inputString: str):
    return any(char.isdigit() for char in inputString)


def has_word(inputString: str):
    return any(char.isascii() for char in inputString)


def same_case(a: str, b: str):
    print(f"a={a} and b={b}")
    if (a.isupper() and b.isupper()) or (a.islower() and b.islower()):
        return 1
    if re.findall("[^a-zA-Z]+", a) or re.findall("[^a-zA-Z]+", b):
        return -1
    if (a.isupper() and b.islower()) or (b.isupper() and a.islower()):
        return 0


# print(a.isupper())
# print(same_case("1", "Z"))
a = "sjfljlsjd!@#"
res = re.findall("[^a-zA-Z]+", a)


# ------------------------------ other solution ------------------------------ #
def short(a, b):
    # but this return True not 1, so how did this pass the test ❓
    return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1


print(short("a", "b"))


# i really liked this one
def same_case(a, b):
    c = a + b  # really good technique
    if not c.isalpha():
        return -1
    if c.islower() or c.isupper():
        return 1
    else:
        return 0
