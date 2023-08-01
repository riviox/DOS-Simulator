// Symulator Command Prompt

const cmdOutput = document.getElementById('output');
const cmdInput = document.getElementById('input');

cmdInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const command = cmdInput.value;
    cmdOutput.innerHTML += `<div><span class="cmd-prompt">C:\\> ${command}</span></div>`;
    executeCommand(command);
    cmdInput.value = '';
    cmdOutput.scrollTop = cmdOutput.scrollHeight;
  }
});

function executeCommand(command) {
  const params = command.split(' ');
  const cmd = params[0].toLowerCase();

  switch (cmd) {
    case 'help':
      showHelp();
      break;
    case 'date':
      showDate();
      break;
    case 'time':
      showTime();
      break;
    case 'echo':
      showEcho(params);
      break;
    default:
      cmdOutput.innerHTML += `<div class="cmd-prompt">Command not recognized: ${cmd}</div>`;
  }
}

function showHelp() {
  const helpText = `
Available commands:
- help: Display available commands
- date: Show current date
- time: Show current time
- echo [text]: Display the provided text
  `;
  cmdOutput.innerHTML += `<div class="cmd-prompt">${helpText}</div>`;
}

function showDate() {
  const currentDate = new Date().toLocaleDateString();
  cmdOutput.innerHTML += `<div class="cmd-prompt">${currentDate}</div>`;
}

function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  cmdOutput.innerHTML += `<div class="cmd-prompt">${currentTime}</div>`;
}

function showEcho(params) {
  if (params.length >= 2) {
    const textToDisplay = params.slice(1).join(' ');
    cmdOutput.innerHTML += `<div class="cmd-prompt">${textToDisplay}</div>`;
  } else {
    cmdOutput.innerHTML += `<div class="cmd-prompt">Nothing to echo.</div>`;
  }
}
