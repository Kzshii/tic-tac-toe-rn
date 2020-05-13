const rules = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const calculateWinner = (game: string[]): boolean => {
  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];
    if (game[a] !== '' && game[a] === game[b] && game[b] === game[c]) {
      return true;
    }
  }
  return false;
};
