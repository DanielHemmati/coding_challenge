def string_to_number(s: str) -> int:
    try:
        return int(s)
    except (ValueError):
        return "Input is not valid"

# a = 'sdf'

b = sum(range(1, 2+1))
print(b)
