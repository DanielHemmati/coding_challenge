

def likes(names):
    # print(len(names))
    hold = 0
    if len(names) == 4:
        hold = 4
    elif len(names) == 3:
        hold = 3
    elif len(names) == 2:
        hold = 2

    print(hold)

    return {
        0: f"no one likes this",
        1: f"{names[0]} likes this",
        2: f"{names[0]} and {names[1]} like this",
        3: f"{names[0]}, {names[1]} and {names[2]} like this",
        4: f"{names[0]}, {names[1]} and {len(names)} like this"
    }[hold]


# test = ['dnale', "hemmati"]
# person = {0: "dnaie", 1: 22}[min(0, len(test))]
# print(person)
# print(likes(['john', "hemmati"]))
# print(min(4, 2))

# i should solve this with if statements
#       if (names.length === 0) return "no one likes this";
#   for (var i = 0; i < names.length; ++i) {
#     if (names.length === 1) {
#       return `${names[i]} likes this`;
#     } else if (names.length === 2) {
#       return `${names[i]} and ${names[i + 1]} like this`;
#     } else if (names.length === 3) {
#       return `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`;
#     } else {
#       return `${names[i]}, ${names[i + 1]} and ${
#         names.slice(i + 2).length
#       } others like this`;
#     }
#   }

def mySecondAttempts(names):
    if len(names) == 0:
        return "no one likes this"

    for index in range(len(names)):
        if len(names) == 1:
            return f"{names[index]} likes this"
        elif len(names) == 2:
            return f"{names[index]} and {names[index + 1]} likes this"
        elif len(names) == 3:
            return f"{names[index]} and {names[index + 1]} and {names[index + 2]} likes this"
        elif len(names) == 4:
            return f"{names[index]} and {names[index + 1]} and {len(names) - 2} other like this"


print(mySecondAttempts(["daniel", "hemamti", "shahin", "mina"]))
