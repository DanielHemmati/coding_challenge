<?php
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/php

function getMiddle(string $text)
{
    $len = strlen($text);
    $half = $len / 2;
    return ($len % 2 === 0) ? substr($text, (floor($half) - 1), 2) : substr($text, $half, 1);
}

$a = 'test';
// getMiddle($a);
print_r(substr($a, (floor(strlen($a) / 2) - 1), 2));
