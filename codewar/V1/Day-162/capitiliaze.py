import string


def to_jaden_case(a):
    return string.capwords(a)


# print(to_jaden_case('daniel hemmati'))


def second(string):
    """[summary]

    Args:
        string (string): [description]

    Returns:
        [string]: [description]
    """
    return " ".join(w.capitalize() for w in string.split())


print(second("how about i'ts "))
