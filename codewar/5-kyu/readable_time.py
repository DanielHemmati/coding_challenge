# https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/python


# from asyncore import read


def readable_time(s: int) -> str:
    # return '{:02}:{:02}:{:02}'.format(s//3600, s//60 % 60, s % 60)
    # or
    return f"{s // 3600:02}:{(s // 60) % 60:02}:{s % 60:02}"


print(readable_time(3599))
