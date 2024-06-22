<?php
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/php

function findIt(array $seq): int
{
    $count = array_count_values($seq);
    foreach ($count as $key => $value) {
        if ($value % 2 !== 0) {
            return $key;
        }
    }
}

function second_solution(array $seq): int
{
    $res = [];
    foreach ($seq as $value) {
        if (isset($res[$value])) {
            $res[$value]++;
        } else {
            $res[$value] = 1;
        }
    }
    foreach ($res as $key => $value) {
        if ($value % 2 !== 0) {
            return $key;
        }
    }
}

print_r(second_solution([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) . "\n"); // 5
