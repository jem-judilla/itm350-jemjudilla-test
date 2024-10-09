function slowFunction() {
  return new Promise(resolve => setTimeout(resolve, 300));
}

module.exports = slowFunction;
