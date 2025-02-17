<?php

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/php

function high(string $x)
{
    $res = [];
    foreach (explode(" ", $x) as $value) {
        $res[$value] = oneWord($value);
    }
    return array_search(max($res), $res);
}

function oneWord(string $x)
{
    return array_sum(array_map(fn($item) => ord($item) - 96, str_split($x)));
}

// print_r(oneWord('daniel'));
// print_r(high("daniel is a good person"));
// $a = 'daniel is a good person';
// print_r(high($a));
