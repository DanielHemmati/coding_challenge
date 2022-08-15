// your boy
function digitalRoot(n) {
  if (String(n).length === 1){
    return n;   
  } else {
    let res = String(n).split("").reduce((a,b) => +a + +b, 0)
    return digitalRoot(res)  
  }
}