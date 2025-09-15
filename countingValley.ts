function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valley = 0;
  let level = 0;
  for (const step of path) {
    if (step == "U") {
      level++;
    } else {
      if (level == 0) valley++;
      level--;
    }
  }
  return valley;

}

console.log(countingValleys(8, "UDDDUDUUDDUDUUUUDDDDUDUUUDD"));
