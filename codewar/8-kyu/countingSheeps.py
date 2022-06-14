def count_sheeps(sheep: list):
    count = 0
    for values in sheep:
        if values == True:
            count += 1

    return count


array1 = [True,  True,  True,  False,
          True,  True,  True,  True,
          True,  False, True,  False,
          True,  False, False, True,
          True,  True,  True,  True,
          False, False, True,  True, ]


print(count_sheeps(array1))

# other solution 
print(array1.count(True)) # we also have this in js
