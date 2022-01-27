

from pickletools import read_int4
from time import process_time_ns


def nb_year(p0, percent, aug, p):
    year = 0
    population = p0
    while population < p:
        population +=  int(population*(percent/100) + aug)
        year += 1
    return year


# print(nb_year(1500, 5, 100, 5000))
p0 = 1500
percent = 5/100
aug = 100 
population = 5000
print(p0 + p0*percent + aug)

## this someone else solution
def nb_year2(p0, percent, aug, p):
    t = 0
    while p0 < p:
        print(p0)
        # why i didn't see that p0 
        p0 = int(p0*(1 + percent/100)) + aug  # my mathematical brain hates that I need to round this
        t += 1
    return t

# print(nb_year2(1500, 5, 100, 5000))

# now solve it with recursion 