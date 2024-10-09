const apiService = require('../src/stress');

test('handles multiple requests under stress', async () => {
  const requests = Array(1000).fill().map((_, i) => apiService.sendRequest(i));
  
  const responses = await Promise.all(requests);
  expect(responses.length).toBe(1000);
});
