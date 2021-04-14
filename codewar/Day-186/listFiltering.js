function filter_list(list) {
  return list.filter((item) => typeof item === "number" && item >= 0);
}

console.log(filter_list([1, 2, "a", "b", 0]));
