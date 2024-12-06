<?php
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/php

$a = "daniel hemmati";

function maskify(string $cc): string
{
    $rs = str_replace(" ", "", $cc);
    return strlen($rs) <= 4 ? $rs : str_repeat("#", strlen($rs) - 4) . substr($rs, -4);
}

print_r(maskify($a));
