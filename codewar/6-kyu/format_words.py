# https://www.codewars.com/kata/51689e27fe9a00b126000004/train/python

# remove empty string
# this is really ugly :neutral_face:
def format_words(words):
    if words == None:
        return ""

    clean_list = [item for item in words if item != ""]
    if len(clean_list) == 0:
        return ""

    if len(clean_list) == 1:
        return clean_list[0]

    if len(clean_list) == 2:
        return clean_list[0] + " and " + clean_list[1]

    res = ""
    for index in range(len(clean_list) - 2):
        res += clean_list[index] + ', '

    return res + clean_list[len(clean_list) - 2] + " and " + clean_list[len(clean_list) - 1]


# shortest one this is amazing
def shortOne(words: list[str]) -> str:
    return ", ".join(word for word in words if word)[::-1].replace(",", "dna ", 1)[::-1] if words else ""


a = ['one', 'two', 'three', 'four', "", None]
print(shortOne(a))
