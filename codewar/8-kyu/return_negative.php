<?php
// https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/php

function makeNegative(float $num): float
{
    return $num >= 0 ? -$num : $num;
}

print_r(makeNegative(42));

// second solution

function secondMakeNegative(float $num): float
{
    return -abs($num);
}

print_r("\n");
print_r(secondMakeNegative(42));