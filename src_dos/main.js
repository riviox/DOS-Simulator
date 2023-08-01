console.log("DOS Simulator by .riviox")

const cmdOutput = document.getElementById('output');
const cmdInput = document.getElementById('input');

// Obsługa wprowadzania poleceń
cmdInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const command = cmdInput.value;
    cmdOutput.innerHTML += `<div><span class="prompt">C:\\></span> ${command}</div>`;
    executeCommand(command);
    cmdInput.value = '';
    cmdOutput.scrollTop = cmdOutput.scrollHeight;
  }
});

// Obsługa wykonywania poleceń
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
      showDir();
      break;
    case 'mkdir':
      createDirectory(params);
      break;
    case 'rmdir':
      removeDirectory(params);
      break;
    case 'cd':
      changeDirectory(params);
      break;
    case 'type':
      showFileContents(params);
      break;
    case 'copy':
      copyFile(params);
      break;
    case 'del':
      deleteFile(params);
      break;
    case 'ren':
      renameFile(params);
      break;
    case 'attrib':
      changeFileAttributes(params);
      break;
    case 'ver':
      showVersion();
      break;
    case 'exit':
      exitDOS();
      break;
    default:
      cmdOutput.innerHTML += `<div>Command not recognized: ${cmd}</div>`;
  }
}

// Funkcja do wyświetlania pomocy i dostępnych komend
function showHelp() {
  cmdOutput.innerHTML += `<div>Available commands:<br>
  - help: Display available commands<br>
  - date: Show current date<br>
  - time: Show current time<br>
  - echo [text]: Display the provided text<br>
  - cls: Clear the screen<br>
  - dir: List files and directories<br>
  - mkdir [directory name]: Create a new directory<br>
  - rmdir [directory name]: Remove a directory<br>
  - cd [directory name]: Change the current directory<br>
  - type [file name]: Display file content<br>
  - copy [source file] [destination file]: Copy a file<br>
  - del [file name]: Delete a file<br>
  - ren [old name] [new name]: Rename a file or directory<br>
  - attrib [file name]: Change file attributes<br>
  - ver: Show DOS version<br>
  - exit: Exit the DOS simulator</div>`;
}

function showDate() {
  const currentDate = new Date().toLocaleDateString();
  cmdOutput.innerHTML += `<div>${currentDate}</div>`;
}

function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  cmdOutput.innerHTML += `<div>${currentTime}</div>`;
}

function showEcho(params) {
  if (params.length >= 2) {
    const textToDisplay = params.slice(1).join(' ');
    cmdOutput.innerHTML += `<div>${textToDisplay}</div>`;
  } else {
    cmdOutput.innerHTML += `<div>Nothing to echo.</div>`;
  }
}

function clearOutput() {
  cmdOutput.innerHTML = '';
}

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
      showDir();
      break;
    case 'mkdir':
      createDirectory(params);
      break;
    case 'rmdir':
      removeDirectory(params);
      break;
    case 'cd':
      changeDirectory(params);
      break;
    case 'type':
      showFileContents(params);
      break;
    default:
      cmdOutput.innerHTML += `<div>Command not recognized: ${cmd}</div>`;
  }
}

// Komenda "dir" - wyświetla listę plików i katalogów w bieżącym katalogu
function showDir() {
  const files = ['file1.txt', 'file2.txt', 'file3.txt'];
  const directories = ['docs', 'images', 'videos'];
  cmdOutput.innerHTML += `<div>Directory of C:\\</div>`;
  files.forEach((file) => {
    cmdOutput.innerHTML += `<div>${file}</div>`;
  });
  directories.forEach((directory) => {
    cmdOutput.innerHTML += `<div>${directory} [DIR]</div>`;
  });
}

// Komenda "mkdir" - tworzy nowy katalog
function createDirectory(params) {
  if (params.length < 2) {
    cmdOutput.innerHTML += `<div>Usage: mkdir [directory name]</div>`;
  } else {
    const directoryName = params[1];
    cmdOutput.innerHTML += `<div>Creating directory: ${directoryName}</div>`;
  }
}

// Komenda "rmdir" - usuwa katalog
function removeDirectory(params) {
  if (params.length < 2) {
    cmdOutput.innerHTML += `<div>Usage: rmdir [directory name]</div>`;
  } else {
    const directoryName = params[1];
    cmdOutput.innerHTML += `<div>Removing directory: ${directoryName}</div>`;
  }
}

// Komenda "cd" - zmienia bieżący katalog
function changeDirectory(params) {
  if (params.length < 2) {
    cmdOutput.innerHTML += `<div>Usage: cd [directory name]</div>`;
  } else {
    const directoryName = params[1];
    cmdOutput.innerHTML += `<div>Changing directory to: ${directoryName}</div>`;
  }
}

// Komenda "type" - wyświetla zawartość pliku
function showFileContents(params) {
  if (params.length < 2) {
    cmdOutput.innerHTML += `<div>Usage: type [file name]</div>`;
  } else {
    const fileName = params[1];
    cmdOutput.innerHTML += `<div>Contents of ${fileName}:</div>`;
    cmdOutput.innerHTML += `<div>This is the content of ${fileName} file.</div>`;
  }
}