<?php
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/php

function square_sum(array $numbers): int
{
    $a = [];
    for ($i = 0; $i < count($numbers); $i++) {
        $a[] = $numbers[$i] ** 2;
    }
    return array_sum($a);
}

$b = [1, 2];
// print_r(square_sum($a));

// other solution

function a(array $a): int
{
    $sum = 0;
    foreach ($a as $number) {
        $sum += $number ** 2;
    }
    return $sum;
}
// print_r(a($b));

function b(array $a): int
{
    // more js like shit
    return array_sum(array_map(fn($item) => $item ** 2, $a));
}
print_r(b($b));

