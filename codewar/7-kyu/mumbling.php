<?php

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/php

function accum(string $s){
    $res = [];
    for ($i = 0; $i < strlen($s); $i++){
        $res[] = ucwords(strtolower(str_repeat($s[$i], $i + 1)));
    }

    return join("-", $res);
}


$a = 'abcd';

print_r(accum($a));