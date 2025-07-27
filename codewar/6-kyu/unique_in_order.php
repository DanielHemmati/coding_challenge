<?php

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/php

// didin't solved
function uniqueInOrder(string $iterable): array
{
    if (is_array($iterable)) {
        $iterable = implode('', $iterable);
    }

    $res = [];
    $prev = null;

    foreach (str_split($iterable) as $char) {
        if ($char !== $prev) {
            $res[] = $char;
            $prev = $char;
        }
    }
    return $res;
}

$a = 'AAAABBBCCDAABBB';
// var_dump(uniqueInOrder($a));

//------------- solutions -------------

function sol1($iterable)
{
    $arr = is_string($iterable) ? str_split($iterable) : $iterable;
    $ret = array_reduce($arr, function($carry, $item) {
        if ($item !== end($carry)){
            $carry[] = $item;
        }
        return $carry;
    }, []);

    return $ret;
}