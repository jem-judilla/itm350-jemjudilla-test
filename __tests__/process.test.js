const startProcess = require('../src/process');

test('starts and kills a process', done => {
  const process = startProcess();
  
  process.on('close', code => {
    expect(code).toBe(0);
    done();
  });
});
