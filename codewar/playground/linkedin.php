<?php

$date = new DateTime("2025-01-01");
$anotherDate = $date;

$anotherDate->modify('+1 day');
echo $date->format('Y-m-d');

echo "\n";

echo $anotherDate->format('Y-m-d');
