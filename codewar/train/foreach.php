<?php

$array = [
    "first" => "apple",
    "second" => "banana",
    "third" => "cherry"
];

// foreach ($array as $value) {
//     echo "Value: $value\n";
// }

foreach ($array as $key => $value) {
    echo "$key: $value\n";
}
