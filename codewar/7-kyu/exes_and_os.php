<?php

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/php
function XO($s): bool
{
    $o = array_filter(str_split($s), fn($o) => $o === 'o');
    $x = array_filter(str_split($s), fn($x) => $x === 'x');
    return count($o) === count($x);
}

$a = 'xxoo';

// print_r(XO('ooxx'));
// print_r(count_chars($a, 1));
// $data = "Two Ts and one F.";
// print_r(my_second_sol('xxoo'));
// foreach (count_chars($data, 1) as $i => $val) {
//    echo "There were $val instance(s) of \"" , chr($i) , "\" in the string.\n";
// }

//------------- second solution -------------

function second(string $s): bool
{
    $lower = strtolower($s);
    return substr_count($lower, 'x') === substr_count($lower, 'o');
}

// print_r(second('oxxo'));

function third(string $s): bool
{
    if (preg_match_all('/[xX]/i', $s) == preg_match_all('/[oO]/i', $s)) {
        return true;
    }

    return false;
}
