

def count_positives_sum_negatives(arr):
    if not isinstance(arr, list) or not len(arr):
        return []
    
    positive = len([count for count in arr if count > 0])
    sum_negative = sum([i for i in arr if i < 0])

    return [positive, sum_negative] 

testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
print(count_positives_sum_negatives(testData))
