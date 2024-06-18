<?php


function positive_sum($arr)
{
    return count($arr) > 0 ? array_sum(array_filter($arr, fn ($item) => $item > 0)) : 0;
}

$a = [1,-4,7,12];
print_r(positive_sum($a) . "\n");
