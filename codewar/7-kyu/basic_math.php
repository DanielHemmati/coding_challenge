<?php

// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions

function basicOp(string $op, int $val1, int $val2): int
{
    switch ($op) {
        case '+':
            return $val1 + $val2;
        case '-':
            return $val1 - $val2;
        case '*':
            return $val1 * $val2;
        case '/':
            return $val1 / $val2;
    }
    return 1;
}
