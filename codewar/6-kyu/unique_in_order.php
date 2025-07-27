<?php

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/php

function uniqueInOrder(string $iterable): array
{
    return array_unique(str_split($iterable));
}

$a = 'AAAABBBCCDAABBB';
var_dump(uniqueInOrder($a));