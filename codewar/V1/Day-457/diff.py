def recur(p0, precent, aug, p, count=0):
    if p0 >= p:
        return count
    else:
        count += 1
        pop = int(p0 * (1 + precent / 100)) + aug
        return recur(pop, precent, aug, p, count)


print(recur(1500, 5, 100, 5000))
