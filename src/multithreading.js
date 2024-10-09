function processData(data) {
  return new Promise(resolve => setTimeout(() => resolve(data), 100));
}

module.exports = processData;
