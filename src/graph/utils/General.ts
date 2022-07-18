export const clamp = (min : number, max: number, value : number) => {
  return Math.min(Math.max(min, value), max);
};

export const getHexFromInt = (val : number) => {
  const res = val.toString(16).toUpperCase();
  if (res.length < 2) {
    return "0" + res;
  }
  return res;
};
