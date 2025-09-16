function findMatching(driver, string) {
  return driver.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
}
function fuzzyMatch(driver, string) {
  return driver.filter((driver) =>
    driver.toLowerCase().startsWith(string.toLowerCase())
  );
}
function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}
