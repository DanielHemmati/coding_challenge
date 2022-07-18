

from cgi import print_arguments


def basic_op(op, n1, n2):
    #your code here
    return {
        "+": n1 + n2,
        "-": n1 - n2,
        "*": n1 * n2,
        "/": n1 / n2
    }[op]

print(basic_op("-", 12, 12))