
# https://edabit.com/challenge/vxKcxazrqgmNA64db

def get_word(left, right):
    return left.title() + right


a = "daniel hemmmati"
# print(a.title())
# print(get_word('daniel', 'hemmati'))

print(a.capitalize())



# other solution
# this one is better
def get_word(left, right):
	return (left+right).capitalize()