def find_missing(seq: list) -> int:
    sumList = (len(seq) + 1) * (seq[0] + seq[len(seq) - 1]) / 2
    return sumList - sum(seq)


a = [1, 2, 3, 4, 6, 7, 8, 9]
print(find_missing(a))
