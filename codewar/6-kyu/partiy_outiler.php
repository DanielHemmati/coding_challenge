<?php

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/php

function find($integers)
{
    // $odd = array_filter($integers, fn($item) => $item & 1);
    // $even = array_filter($integers, fn($item) => $item & 0);
    $odd = array_filter($integers, function ($item) {
        return $item & 1;
    });
    $even = array_filter($integers, function ($item) {
        return $item & 0;
    });

    return count($odd) ? array_values($odd)[0] : array_values($even)[0];
}

$a = [2, 4, 0, 100, 4, 11, 2602, 36];
print_r(find($a));
// print_r($a[0]);

// this solution didn't worked in php 7 really weird
// this workd
function second($a) {
  $odds = [];
  $evens = [];
  foreach ($a as $n) {
    if ($n % 2) array_push($odds, $n);
    else array_push($evens, $n);
  }
  return count($evens) === 1 ? $evens[0] : $odds[0];
}