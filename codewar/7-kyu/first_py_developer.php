<?php


function get_first_python($a)
{
    $res = current(array_filter($a, fn($item) => $item['language'] === 'Python'));
    return $res ?  $res['first_name'] . ', ' . $res['country'] : 'There will be no Python developers';
}

$list1 = [
    [
        "first_name" => "Mark",
        "last_name" => "G.",
        "country" => "Scotland",
        "continent" => "Europe",
        "age" => 22,
        "language" => "JavaScript"
    ],
    [
        "first_name" => "Victoria",
        "last_name" => "T.",
        "country" => "Puerto Rico",
        "continent" => "Americas",
        "age" => 30,
        "language" => "Python"
    ],
    [
        "first_name" => "Emma",
        "last_name" => "B.",
        "country" => "Norway",
        "continent" => "Europe",
        "age" => 19,
        "language" => "Clojure"
    ]
];

echo get_first_python($list1);
