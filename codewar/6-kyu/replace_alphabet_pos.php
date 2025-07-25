<?php

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/php
// solved

// time complexity = O(n)
// spcae complexity = O(n)
function alphabet_position(string $s): string
{
    $res = [];
    $split = str_split($s);
    foreach ($split as $char) {
        if (!ctype_alpha($char)) continue;
        $res[] = ord(strtolower($char)) - 96;
    }
    return implode(' ', $res);
}

// var_dump(alphabet_position("The sunset sets at twelve o' clock."));

//------------- other solution -------------

function sol1(string $s): string
{
    // $out is the 2d array and output of the preg_match_all
    preg_match_all('/[a-z]/', strtolower($s), $out);
    return join(' ', array_map(fn($item) => ord($item) - 96, $out[0]));
}

var_dump(sol1("The sunset sets at twelve o' clock."));
