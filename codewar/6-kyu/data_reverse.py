# https://www.codewars.com/kata/569d488d61b812a0f7000015/train/python
import re
# my sol
def data_reverse(data):
    split_by_eight = re.findall(".{8}", "".join([str(item) for item in data]))
    rev = reversed(split_by_eight)
    int_list = "".join(rev)
    return [int(item) for item in int_list]

