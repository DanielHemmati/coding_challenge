# i don't understand the question
# now i see the solution i got it

# https://pythontutor.com/visualize.html#mode=display
# okay i gotit
def find_nb(m):
    total = 0
    n = 1
    while total < m:
        total += n**3
        if total == m:
            return n
        n += 1

    return -1


print(find_nb(1071225))
