// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
    if (f() == g()) return "neither";
    return f() > g() ? "f" : "g";
}

console.log(
    whichIsLarger(
        () => 25,
        () => 25
    )
);