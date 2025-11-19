# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python


def reverse_words(text: str) -> str:
    # this is awful, idk any better
    return "".join(list(reversed(" ".join(text.split(" ")[::-1]))))


b = "The quick brown fox jumps over the lazy dog."
a = "daniel"
res = "".join(list(reversed(" ".join(b.split(" ")[::-1]))))
# print(res)


# ---------------------------------- second ---------------------------------- #
# this is way bette
def second(text: str) -> str:
    return " ".join([char[::-1] for char in text.split(" ")])


print(second(b))
