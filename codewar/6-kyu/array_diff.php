<?php
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/php

$a = [1, 2, 3];
$b = [1];

print_r(array_values(array_diff($a, $b)));
print_r(array_diff($a, $b));