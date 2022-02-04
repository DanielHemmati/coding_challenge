# https://www.codewars.com/kumite/61994ee3fe5a67004ad26adf?sel=61f6f8a931469b0016e8228a

import re 
def get_nth_word(string: str, n: int) -> str:
    if n < 1:
        return ""
    else:
        return " ".join(string.split()[n-1:n])

a = "And a one and a two and a three and a four"
lorem = "Lorem ipsum dolor sit amet"
b =  3
print(get_nth_word(lorem, b))

# res = re.compile(r"([\w][\w]*'?\w?)").findall(a)
res = re.compile(r"\w+").findall(a)[2:3]
print(res)
