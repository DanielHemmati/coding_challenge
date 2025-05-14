<?php


function isIsogram(string $s): bool
{
    return strlen(count_chars(strtolower($s), 3)) === strlen($s);
}

var_dump(isIsogram('Dermatoglyphics'));
var_dump(isIsogram('aba'));
var_dump(isIsogram('moOse'));

