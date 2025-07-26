<?php

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/php

function solution(string $str, string $ending): bool
{
    return str_ends_with($str, $ending);
}

$haystack = 'abc';
$needle = 'bc';
// var_dump(solution($haystack, $needle));

var_dump(var_export(false, true));
