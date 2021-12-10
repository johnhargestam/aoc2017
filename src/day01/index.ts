import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput.split('').map((n) => +n);

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[(i + 1) % input.length]) {
      sum += input[i];
    }
  }
  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[(i + input.length / 2) % input.length]) {
      sum += input[i];
    }
  }
  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `1122`,
        expected: 3,
      },
      {
        input: `1111`,
        expected: 4,
      },
      {
        input: `1234`,
        expected: 0,
      },
      {
        input: `91212129`,
        expected: 9,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1212`,
        expected: 6,
      },
      {
        input: `1221`,
        expected: 0,
      },
      {
        input: `123425`,
        expected: 4,
      },
      {
        input: `123123`,
        expected: 12,
      },
      {
        input: `12131415`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
