
# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python
# solve
def DNA_strand(dna: str):
    old_char = "ACGT"
    replace_char = "TGCA"
    tab = dna.maketrans(old_char, replace_char)
    return dna.translate(tab)


a = "ACAG"
# print(DNA_strand(a))

# ------------------------------ other solution ------------------------------ #

pair = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
}


def second(dna: str):
    return "".join([pair[char] for char in dna])


# i fucking love programming, i was so aggresive that day it sounds like
# i love new ideas
# asking hard question, tryihng to understand theme
print(second(a))
