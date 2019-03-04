function compareObjByVals(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  keys1.forEach((key) => {
    console.log(obj1[key]);
    console.log(obj2[key]);
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  });

  return true;
}
function compareArrOfObj(arr1, arr2) {
  arr1.forEach((obj1) => {
    const finded = arr2.find(obj2 => compareObjByVals(obj1, obj2));
    if (!finded) return false;
  });

  return true;
}

export { compareObjByVals, compareArrOfObj };
