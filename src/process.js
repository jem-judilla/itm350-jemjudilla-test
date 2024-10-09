const { spawn } = require('child_process');

function startProcess() {
  return spawn('node', ['--version']);
}

module.exports = startProcess;
