# solved
def solution(string: str) -> list[str]:
    if len(string) == 0:
        return []

    res = []
    for char in range(0, len(string), 2):
        res.append(string[char : char + 2])

    if len(res[len(res) - 1]) == 1:
        res[len(res) - 1] += "_"

    return res


a_string = "abcdeb"
n = 2
split_strings = [a_string[index : index + n] for index in range(0, len(a_string), n)]

split_strings[len(split_strings) - 1] += "_"
# print(split_strings[len(split_strings) - 1])
# print(split_strings)
# print(solution(""))

# ------------------------------ other solutoin ------------------------------ #
# with regex
import re


def withRegex(string: str) -> "list[str]":
    return re.findall(".{2}", string + "_")


b = "abcd"
print(withRegex(b))
