export const convertPixelToUnit = (
    viewBoxSplit: number[],
    canvasWidth : number,
    canvasHeight : number, x: number, y: number
): [number, number] => {
  const width = viewBoxSplit[2];
  const height = viewBoxSplit[3];
  const scaledX = width / canvasWidth * x;
  const scaledY = height / canvasHeight * y;
  return [ scaledX + viewBoxSplit[0], scaledY + viewBoxSplit[1] ];
};

export const convertPixelDistanceToUnit = (
    viewBoxSplit: number[],
    canvasWidth : number,
    canvasHeight : number, distances: number[]
) : number[] => {
  const res : number[] = [];
  const origin = convertPixelToUnit(viewBoxSplit, canvasWidth, canvasHeight, 0, 0);
  distances.forEach((distance) => {
    const point = convertPixelToUnit(viewBoxSplit,
      canvasWidth,
      canvasHeight,
      distance,
      0);
    res.push(point[0] - origin[0]);
  });
  return [ ...res ];
};
