

def is_isogram(string):
    return len(set(list(string.lower()))) == len(string)
    # this is also true
    # return len(string) == len(set(string.lower()))


# print(is_isogram("aba"))

# print(list("aMa".lower()))
def second(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1:
            return False
    return True


print(second("aba"))
