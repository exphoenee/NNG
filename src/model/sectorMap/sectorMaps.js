/* these 2 dimensional array writing down the rows and seats in a sector */

export boxMap = [
  [1, 1, 1, 1], //the numbers are the price category of a seat
  [0, 0, 0, 0],
];

export centralAuditoriumMap = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  // 14 seat 14x5000 Ft seat
  [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
  // 15 seat 1x4000 Ft + 13x5000 Ft + 1x4000 Ft seat
  [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
  // 16 seat 1x4000 Ft + 14x5000 Ft + 1x4000 Ft seat
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  // 17 seat 2x4000 Ft + 13x5000 Ft + 2x4000 Ft seat
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  // 18 seat 2x3000 Ft + 14x5000 Ft + 2x3000 Ft seat
  [2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2],
  // 19 seat 2x3000 Ft + 15x5000 Ft + 2x3000 Ft seat
  [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
  // 20 seat 3x2000 Ft + 14x3000 Ft + 3x2000 Ft seat
  [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
  // 21 seat 4x2000 Ft + 15x3000 Ft + 4x2000 Ft seat
  [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
  // 22 seat 4x2000 Ft + 16x3000 Ft + 4x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 23 seat 5x2000 Ft + 13x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 24 seat 5x2000 Ft + 14x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 23 seat 5x2000 Ft + 13x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //24 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // 23 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //24 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // 23 seat 3000 Ft seat
];

export sideBalconyMap = [
  [2, 2, 2, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export midBalconyMap = [
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
