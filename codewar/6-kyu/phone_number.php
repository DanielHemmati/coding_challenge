<?php
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/php 


function createPhoneNumber(array $numbersArray): string
{
    return sprintf("(%d%d%d) %d%d%d-%d%d%d%d", ...$numbersArray);
}

$a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// print_r(createPhoneNumber($a) . "\n"); // (123) 456-7890

function second_solution(array $numbersArray): string
{
    return "(" . implode(array_slice($numbersArray, 0, 3)) . ") " . implode(array_slice($numbersArray, 3, 3)) . "-" . implode(array_slice($numbersArray, 6, 4));
}

$b = ["daniel", "hemmati", "hello"];
$d = array_slice($b, 0, 1);
print_r($d);
