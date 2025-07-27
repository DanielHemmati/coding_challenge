<?php

// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/php

// solved 
function alphabetWar(string $fight): string
{
    $left_side = [
        'w' => 4,
        'p' => 3,
        'b' => 2,
        's' => 1
    ];

    $right_side = [
        'm' => 4,
        'q' => 3,
        'd' => 2,
        'z' => 1
    ];

    $leftSideCount = 0;
    $righSideCount = 0;

    foreach (str_split($fight) as $char) {
        $leftSideCount += $left_side[$char] ?? 0;
        $righSideCount += $right_side[$char] ?? 0;
    }

    if ($leftSideCount === $righSideCount) {
        return "Let's fight again!";
    }

    return $leftSideCount > $righSideCount ? 'Left side wins!' : 'Right side wins!';
}

$a = 'wwwwwwz';
// var_dump(alphabetWar($a));

//------------- other solution -------------

// for this you will get a warning. you can't add the string to number
function sol1($fight)
{
    $right_side = array_sum(str_split(strtr($fight, ["m" => 4, "q" => 3, "d" => 2, "z" => 1])));
    $left_side = array_sum(str_split(strtr($fight, ["w" => 4, "p" => 3, "b" => 2, "s" => 1])));
    return ($right_side > $left_side) ? "Right side wins!" : ($left_side > $right_side ? "Left side wins!" : "Let's fight again!");
}

// var_dump(sol1($a));
