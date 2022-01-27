
def abb_name(s: str) -> str:
    """output with the first char capital 

    Args:
        s (str): string

    Returns:
        str: "daniel hemmati" => "D.H"
    """
    first = s.split()[0][0].upper()
    second = s.split()[1][0].upper()
    return first + "." + second


d = "daniel hemmat"
# print(abb_name(d))

# ------------------------------ other solution ------------------------------ #


# this one is better
def abb(name: str) -> str:
    return ".".join(w[0] for w in name.split()).upper()


d = "daniel hemmat"
print(abb(d))
