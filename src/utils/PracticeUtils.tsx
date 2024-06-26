export const getRandomItems = <T extends unknown>(arr: T[], n: number): T[] => {
  const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const getRandomItemswithoutRepeat = <T extends unknown>(
  arr: T[],
  n: number,
  buffer: T[]
): T[] => {
  arr = arr.filter(function (element) {
    return !buffer.includes(element);
  });
  const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const getRandomNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
