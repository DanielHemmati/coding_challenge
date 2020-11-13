
// https://edabit.com/challenge/GJn7xcBiCLdCNXFgy

// {
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// }

/**
 * 
 * @param {object} info 
 */
function profit(info) {
    return Math.round(info.inventory * (info.sellPrice - info.costPrice))
}

var test = {
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}
// console.log(profit(test))

// const { sellPrice, costPrice, inventory } = test;
// console.log(Math.round(sellPrice))


//------------- other solution -------------
function profit2(info) {
    // i should use this more
    const {sellPrice, costPrice, inventory} = info
    return Math.round((sellPrice - costPrice) * inventory);
}

// console.log(profit2(test))

