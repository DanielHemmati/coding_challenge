# https://www.codewars.com/kata/573d498eb90ccf20a000002a/train/python
# we can hardcode this, but there has to be some rule i think



# solved 
def decode(string: str) -> str:
    # if we have 3, we should decode as 7. how?
    # 3+5+7 = 15, 2+5+8=15, 1+5+9=15, ... 
    # encode is given (i.e 3), the main_number is 5, they should total to 15
    # so we can get third variable easily
    main_number = "5"
    total = "15"
    res = ""
    for n in string:
        if n == "5": 
            res += "0"
        elif n == "0":
            print(n)
            res += "5"
        else:
            res += str(int(total) - int(n) - int(main_number))

    return res



encoded = "4103432323"
ans =     "6957678787"
# print(decode(encoded))

# --------------------- not readable but elegant solution -------------------- #
# good one
def shortestOne(s):
    return s.translate(str.maketrans("1234567890", "9876043215"))

# print(test(encoded))
# print(str.maketrans("1234567890", "9876043215"))