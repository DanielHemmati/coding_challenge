<?php

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/php
// solved

function DNA_strand(string $s): string
{
    $pair = [
        'A' => 'T',
        'T' => 'A',
        'C' => 'G',
        'G' => 'C'
    ];
    return implode('', array_map(fn($el) => $pair[$el], str_split($s)));
}

$a = 'AAAA';
// var_dump(DNA_strand($a));

//------------- solution -------------

function sol1(string $dna): string 
{
    return strtr($dna, 'ACGT', 'TGCA');
}

var_dump(sol1($a));
