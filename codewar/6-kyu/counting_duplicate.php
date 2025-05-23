<?php

function duplicateCount(string $text): int
{
    $text = strtolower($text);
    $chars = str_split($text);
    $counts = [];

    foreach ($chars as $char) {
        if (!isset($counts[$char])) {
            $counts[$char] = 1;
        } else {
            $counts[$char]++;
        }
    }

    $duplicates = array_filter($counts, fn($count) => $count > 1);
    print_r($duplicates);
    return count($duplicates);
}

echo duplicateCount("aabbcde");