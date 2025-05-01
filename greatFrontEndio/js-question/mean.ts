/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
  if (!array.length) return NaN;
  const sum = array.reduce((a, b) => a + b, 0);
  const m = Math.floor(sum / array.length);
  return m;
}

function chunkedMean(array: Array<number>, chunkSize = 1000): number {
  let total = 0;
  let count = 0;

  // why i+=chunkSize ? b/c you want to skip a chunk that way
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    const sum = chunk.reduce((a, b) => a + b, 0);
    total += sum;
    count += chunk.length;
  }

  return total / count;
}
