# https://www.codewars.com/kata/566fc12495810954b1000030/train/python
def nb_dig(n, d):
    list_of_number = [i**2 for i in range(n+1)]
    make_string = "".join(str(i) for i in list_of_number)
    # your code
    res = ""
    for i in make_string:
        if i in str(d):
            res += i

    length_str = len(res)
    return length_str


# nb_dig(25, 1)

# other solution

# beautiful
def second(n: int, d: int) -> int:
    return sum(str(i*i).count(str(d)) for i in range(n+1))

print(second(25, 1))
# res = [str(i*i).count("1") for i in "121"]
# python have this, which is really nice
# print("121".count("1"))


