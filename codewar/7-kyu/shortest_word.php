<?php

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/php

function findShort(string $str): int
{
    $arr = explode(" ", $str);
    usort($arr, fn($a, $b) => strlen($a) <=> strlen($b));
    return strlen($arr[0]);
}

$a = "daniel hemmati is a good programmer";

// print_r(findShort($a));

//------------- other solution -------------

function sol1(string $str): int 
{
    return min(array_map('strlen', explode(" ", $str)));
}

var_dump(sol1($a));
