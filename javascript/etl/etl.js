export function transform(old) {
  var newObj = new Object();
  Object.entries(old).forEach((item) => {
    item[1].map((val) => {
      newObj[val.toLowerCase()] = Number(item[0])
    })
  });
  return newObj;
}