<?php
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/php

function square_digits(int $num)
{
    return (int)implode("", array_map(fn ($n) => $n * $n, str_split($num)));
}

print_r(gettype(square_digits(9119) ). "\n"); // 811181


$aa = 123;
$dd = str_split($aa);
print_r($dd);