<?php
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/php


function countBits($n): int
{
    $a = decbin($n);
    return count(array_map('intval', str_split($a)));
}

$a = 1234;
$res = array_filter(str_split((string) decbin($a)), fn($item) => $item === '1');
// print_r($res);

//------------- second solution -------------

function second($n): int
{
    return substr_count((string) decbin($n), '1');
}

print_r(second($a));
