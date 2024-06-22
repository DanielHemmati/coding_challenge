<?php

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/php

function highAndLow(string $n): string
{
    $numbers = explode(" ", $n);
    $max = max($numbers);
    $min = min($numbers);
    return "$max $min";
}


print_r(highAndLow("1 2 3 4 5") . "\n"); // "5 1"