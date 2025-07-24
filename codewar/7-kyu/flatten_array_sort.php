<?php

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/php


function flatten_and_sort(array $array): array
{
    return $array;
}

$a = [[1, 2, 3], [4, 5, 6]];
// print_r(flatten_and_sort($a));
// print_r(flatten($a));

// couldn't solve it

function sol1(array $array): array
{
    $flatten = array_merge(...$array);
    sort($flatten);
    return $flatten;
}

// print_r(array_merge(...[]));

$array1 = ['a' => 1, 'b' => 2];
$array2 = ['b' => 3, 'c' => 4];
$d = array_merge($array1, $array2);
print_r($d);