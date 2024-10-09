function sendRequest(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Response for request ${id}`);
    }, 10);
  });
}

module.exports = { sendRequest };
