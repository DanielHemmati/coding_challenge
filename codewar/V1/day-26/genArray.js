// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

// const arr = N => [... new Array(N).keys()]

// console.log(arr(10));

const arr = (N) => {
    return N ? [...Array(N).keys()] : [];
};

console.log(arr(10));
