# https://www.codewars.com/kata/52774a314c2333f0a7000688/train/python
import re


# learnt really well from JS
def valid_parentheses(string: str):
    count = 0
    for paren in string:
        print(paren)
        if paren == "(":
            count += 1
        if paren == ")":
            count += -1
        if count < 0:
            return False

    return count == 0


correct = "((()))"
wrong = "()))"

# print(valid_parentheses("("))

# solution


def second(paren: str) -> bool:
    try:
        re.compile(paren)
    except:
        return False

    return True


# print(re.compile(wrong))


def third(paren: str) -> bool:
    # paren = "".join(char for char in paren if char in "()")
    while "()" in paren:
        paren = paren.replace("()", "")

    return not paren


print(third(wrong))
