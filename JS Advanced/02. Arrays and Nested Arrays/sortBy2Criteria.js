function sortBy2Criteria(arr) {
  arr.sort((a, b) => {
    const firstCriteria = a.length - b.length;
    const secondCriteria = a.localeCompare(b);
    return firstCriteria || secondCriteria;
  });
  return arr.join("\n");
}
console.log(sortBy2Criteria(["test", "Deny", "omen", "Default"]));
