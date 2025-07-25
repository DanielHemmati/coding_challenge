<?php

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/php

function persistence(int $num): int
{
    if ($num < 10) return $num;
    $count = 0;

    while (strlen((string) $num) > 1) {
        $split_num = str_split((string) $num);
        $num = array_reduce($split_num, fn($a, $b) => $a * $b, 1);
        $count++;
    }

    return $count;
}

// var_dump(persistence(39));

// $a = [1, 2, 3];
// $res = array_reduce($a, fn($a, $b) => $a * $b, 1);
// var_dump($res);

//------------- other solution -------------

function sol1(int $num): int
{
    $count = 0;
    while ($num >= 10) {
        $num = array_product(str_split($num));
        $count++;
    }
    return $count;
}

var_dump(sol1(39));
