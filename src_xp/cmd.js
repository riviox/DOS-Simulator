// Symulator Command Prompt

const cmdOutput = document.getElementById('output');
const cmdInput = document.getElementById('input');
let currentDirectory = 'C:\\';

cmdInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const command = cmdInput.value;
    cmdOutput.innerHTML += `<div><span class="cmd-prompt">${currentDirectory}> ${command}</span></div>`;
    executeCommand(command);
    cmdInput.value = '';
    cmdOutput.scrollTop = cmdOutput.scrollHeight;
  }
});

function executeCommand(command) {
  const params = command.trim().split(' ');
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
    case 'cls':
      clearOutput();
      break;
    case 'dir':
      showDirectoryListing();
      break;
    case 'cd':
      changeDirectory(params);
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
- cls: Clear the screen
- dir: List files and directories in the current directory
- cd [directory]: Change the current directory
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

function clearOutput() {
  cmdOutput.innerHTML = '';
}

function showDirectoryListing() {
  // Tutaj można dodać logikę do wyświetlania listy plików i katalogów w bieżącym katalogu
  // Na potrzeby tego przykładu, wyświetlimy tylko jedno "test.txt"
  cmdOutput.innerHTML += `<div class="cmd-prompt">test.txt</div>`;
}

function changeDirectory(params) {
  if (params.length >= 2) {
    const targetDirectory = params[1];
    // Tutaj można dodać logikę do zmiany katalogu roboczego
    // Na potrzeby tego przykładu, zmienimy tylko zmienną currentDirectory
    currentDirectory = `${currentDirectory}${targetDirectory}\\`;
    cmdOutput.innerHTML += `<div class="cmd-prompt">Current directory: ${currentDirectory}</div>`;
  } else {
    cmdOutput.innerHTML += `<div class="cmd-prompt">Please provide a valid directory.</div>`;
  }
}
