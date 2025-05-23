<?php



// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/php
function duplicate_encode(string $word): string
{
    $chars = str_split(strtolower($word));
    $counts = array_count_values($chars);
    $res = "";
    for ($i = 0; $i < strlen($word); $i++){
        $char = $chars[$i];
        if ($counts[$char] === 1){
            $res .= '(';
        }

        if ($counts[$char] > 1){
            $res .= ')';
        }
    }
    return $res;
}

$b = 'recede';
print_r(duplicate_encode($b));
