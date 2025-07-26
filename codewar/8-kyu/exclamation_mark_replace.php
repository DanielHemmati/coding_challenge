<?php

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/php

// solved

function replace(string $s): string
{
    return preg_replace('/[aeiou]/i', '!', $s);
}

$a = 'aeour';
var_dump(replace($a));
