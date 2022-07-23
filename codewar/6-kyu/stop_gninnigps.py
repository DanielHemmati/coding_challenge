def spin_words(s: str) -> str:
    # res = []
    # for word in s.split():
    #     if len(word) >= 5:
    #         res.append(word[::-1])
    #     else:
    #         res.append(word)
    # return " ".join(res)

    # this is like js
    # return " ".join(list(map(lambda x: x[::-1] if len(x) >= 5 else x, s.split())))
    # or 
    return " ".join(word[::-1] if len(word) >= 5 else word for word in s.split())


a = "Hey fellow warriors"
print(spin_words(a))
