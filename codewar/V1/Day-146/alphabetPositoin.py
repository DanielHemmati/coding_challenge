# i saw the solution, still i have problem with python
def alphabet_position(text):
    res = ""
    text_uppercase = text.upper()
    for char in text_uppercase:
        if ord(char) > 64 and ord(char) < 91:
            res += str(ord(char)) - 64 + " "

    return res


a = "daenil"
# print(alphabet_position(a))


def alphabet(text):
    return " ".join(str(ord(char) - 96) for char in text.lower() if char.isalpha())


print(alphabet(a))
