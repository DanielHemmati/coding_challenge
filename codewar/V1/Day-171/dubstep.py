import re


def sub_step(song: str):
    return re.sub(r"WUB", " ", song).strip()


a = "WUBAWUBBWUBCWUB"
print(sub_step(a))
