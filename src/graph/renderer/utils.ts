export const convertPixelToUnit = (
    viewBoxSplit: number[],
    bounding: DOMRect,
    x: number, y: number
): [number, number] => {
  const width = viewBoxSplit[2];
  const height = viewBoxSplit[3];
  const scaledX = width / bounding.width * (x - bounding.left);
  const scaledY = height / bounding.height * (y - bounding.top);
  return [ scaledX + viewBoxSplit[0], scaledY + viewBoxSplit[1] ];
};

export const convertPixelDistanceToUnit = (
    viewBoxSplit: number[],
    bounding: DOMRect, distances: number[]
) : number[] => {
  const res : number[] = [];
  const origin = convertPixelToUnit(viewBoxSplit, bounding, 0, 0);
  distances.forEach((distance) => {
    const point = convertPixelToUnit(viewBoxSplit,
      bounding,
      distance,
      0);
    res.push(point[0] - origin[0]);
  });
  return [ ...res ];
};
