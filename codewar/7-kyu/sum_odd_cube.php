<?php

function cube_odd(array $a)
{
    $checkValidArray = array_filter($a, fn($item) => !is_numeric($item));
    if (count($checkValidArray) > 0) return null;
    $getOddNumber = array_sum(array_map(fn($item) => $item ** 3, array_filter($a, fn($item) => $item & 1)));
    return $getOddNumber;
}


$a = [1, 2, 3, 4];
print_r(cube_odd($a));
