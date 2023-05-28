const iceBrickVolume = (rad, btlLen, rmLen) =>
  ((btlLen - rmLen) * (rad + rad) ** 2) / 2;

console.log(iceBrickVolume(1, 10, 2));

// or (with brain power)

const iceBrickVolumePlus = (r, x, y) => 2 * r * r * (x - y);
