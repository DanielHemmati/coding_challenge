# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python


def is_valid_walk(walk: list[str]) -> bool:
    if len(walk) != 10:
        return False

    return walk.count("n") == walk.count("s") and walk.count("e") == walk.count("w")
