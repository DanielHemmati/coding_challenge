<?php

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/php

function remove_char(string $s): string
{
    return substr($s, 1, -1);
}

print_r(substr("Daniel", 1));