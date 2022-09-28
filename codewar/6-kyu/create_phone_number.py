

# solved
def create_phone_number(n: "list[int]") -> str:
    list_str = [str(item) for item in n]
    # or list_str = "".join(map(str, n))
    return f'({"".join(list_str[0:3])}) {"".join(list_str[3:6])}-{"".join(list_str[6:])}' 

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
print(create_phone_number(a))
# print(int("".join(a[0:3])))


# --------------------------------- other sol -------------------------------- #

def second(n: "list[int]") -> str:
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

print(second(a))
