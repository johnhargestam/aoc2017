import run from 'aocrunner';

const parseInput = (rawInput: string) =>
  rawInput.split(/\s*\n\s*/).map((line) => line.split(/\s/).map((num) => +num));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .map((line) => Math.max(...line) - Math.min(...line))
    .reduce((total, num) => total + num, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return input
    .map((line) => {
      for (const a of line) {
        for (const b of line) {
          if (a !== b && Math.max(a, b) % Math.min(a, b) === 0) {
            return Math.max(a, b) / Math.min(a, b);
          }
        }
      }
      return 0;
    })
    .reduce((total, num) => total + num, 0);
};

run({
  part1: {
    tests: [
      {
        input: `5 1 9 5
        7 5 3
        2 4 6 8`,
        expected: 18,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `5 9 2 8
        9 4 7 3
        3 8 6 5`,
        expected: 9,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
