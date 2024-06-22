<?php

function remove_vowels(string $s): string
{
    return preg_replace('/[aeiou]/i', '', $s);
}

print_r(remove_vowels("Daniel"));