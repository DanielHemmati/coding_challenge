
# https://edabit.com/challenge/QB6kPXQkFgMkzcc2h
import re


# trying to get better at python also 
def remove_abc(txt):
    if not txt or len(re.sub('[abc]', '', txt)) == len(txt): 
        return None
    return re.sub('[abc]', '', txt)





# a = ""
# print(re.sub('[abc]', '', a))
# print(remove_abc(a))
# print(remove_abc('hello world'))
# print(remove_abc(""))



a = "This might be a bit hard"
b = "This might a bit hard"
# print(len(a))
# print(len(b))
# print(not a if None else re.sub('[abc]', '', a))

# other solution
def first(txt):
    res = ''.join(i for i in txt if i not in 'abc')
    return res

# print(first(a))

# x = []
# for i in a:
#     if i not in "abc":
#         x.append(i)

# print(''.join(x))

def practice(txt):
    res = ''.join(i for i in txt if i not in 'abc')
    return res

# i think therefor i am
print(practice('daniel'))







