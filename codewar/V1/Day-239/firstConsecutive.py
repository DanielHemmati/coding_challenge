def first_non_consecutive(arr: list):
    for index, value in enumerate(arr, start=arr[0]):
        if index != value:
            return value
    return None


d = [1, 2, 3, 4, 6, 7, 8]
# print(first_non_consecutive(d))

# --------------------------------- other one -------------------------------- #


def second(arr: list):
    for i in range(1, len(arr)):
        if arr[i] - arr[i - 1] > 1:
            return arr[i]
    return None


num_list = [1, 2, 3]
str_list = ["daniel", "hemmati", "shahin"]
result = zip(num_list, str_list)
# print(list(result))
# for index, value in list(result):
#     print(index, value)
index, value = zip(*result)
print(f"value = {value}")
print(f"index = {index}")


# print(second(d))
