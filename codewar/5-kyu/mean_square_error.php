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

