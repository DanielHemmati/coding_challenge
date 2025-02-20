<?php
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/php
 
function getSum(int $a, int $b): int{
  return $a === $b ? $a : array_sum(range($a, $b));
}

print_r(getSum(-5, 1));