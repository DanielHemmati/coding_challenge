<?php

function solution(array $a, array $b): float {
    $sum = [];

    for ($i = 0; $i < count($a); $i++){
        $sum[] = abs($a[$i] - $b[$i]) ** 2;
    }

    return array_sum($sum) / count($a);
}

$a = [1, 2, 3];
$b = [4, 5, 6];
// print_r(solution($a, $b));
// print_r(count($a));

//------------- second solution -------------

function second(array $a, array $b): float{
    $result = array_map(function ($item1, $item2) {
        return pow(abs($item1 - $item2), 2);
    }, $a, $b);

    return array_sum($result) / count($result);
}

print_r(second($a, $b));
