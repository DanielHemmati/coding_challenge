import re


def replaceEx(s: str) -> str:
    return re.sub("/!+$/gi", "", s)


d = "daniel hemmati!!"
print(replaceEx(d))
