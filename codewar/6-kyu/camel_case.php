<?php

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/php

function toCamelCase(string $str): string
{
    // just cap all of the letter
    $res = str_replace(' ', '', ucwords(preg_replace('/[-_]/', ' ', $str)));

    // check in original string if the first letter is upper case or not
    if (! ctype_upper($str[0])) {
        $res[0] = strtolower($res[0]);
    }

    return $res;
}

$a = 'The_stealth_warrior';
$b = 'the_stealth_warrior';
var_dump(toCamelCase($b));
