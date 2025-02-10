<?php
// finish this
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/php

function partlist(array $arr)
{
    $res = [];
    for($i = 0; $i < count($arr) - 1; $i++){
        $res[] = [implode(" ", array_slice($arr, 0, $i + 1)), implode(" ", array_slice($arr, $i + 1))];
    }
    return $res;
}

$a = ["az", "toto", "picaro", "zone", "kiwi"];
// print_r(partlist($a));
// print_r(implode(" ", array_slice($a, 0, 1)));
$b = decbin(0);
$res = count(array_map('intval', str_split($b)));
print_r($res);