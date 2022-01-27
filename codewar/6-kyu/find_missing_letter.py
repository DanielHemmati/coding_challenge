from tkinter import commondialog


a = ['a','b','c','d','f']
# print(set(a))
# print(ord('A'))
# print(chr(65))

# its's ugly but it works :woozy_face:
def find_missing_letter(chars):
    first_char = chars[0]
    last_char = chars[len(chars) - 1]
    compare = set()
    for i in range(ord(first_char), ord(last_char) + 1):
        compare.update(chr(i))
    
    return list(compare - set(chars))[0]



print(find_missing_letter(a))
