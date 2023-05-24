function magNumber(info) {
  switch (info[0]) {
    case "PT92":
      info[0] = 17;
      break;
    case "PSG1":
      info[0] = 5;
      break;
    default:
      info[0] = 30;
  }
  console.log(info);
  return Math.ceil((info[1] * 3) / info[0]);
}

console.log(magNumber(["PT92", 6]));
