# https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python
# this are langauge quirks
def sum_str(a: str, b: str):
    # this works for me, but not for codewar
    # return str(int(float(a)) + int(float(b)))
    # this is how everybody else solve it
    """
    Python's or and and are short-circuiting, meaning:

    or will not evaluate the second operand if the first is truthy.
    and will not evaluate the second operand if the first is falsey.

    '' or 0 will always return 0.
    'non-empty-string' or 0 will always return the string.
    """
    return str(int(a or 0) + int(b or 0))  # see below for more information


print(sum_str("2", "3"))
# ---------------------------------- comment --------------------------------- #
# the comment of the first solution =
