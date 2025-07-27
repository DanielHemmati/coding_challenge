<?php

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/php

// solved
function detect_pangram(string $string): string
{
    return count(array_unique(str_split(preg_replace('/[^a-zA-Z]/', '', strtolower($string))))) === 26 ? true : false;
}

$a = 'The quick brown fox jumps over the lazy dog.';

$b = range('a', 'z');
print_r($b);
