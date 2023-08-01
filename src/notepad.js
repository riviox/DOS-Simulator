// Symulator Notepad

const notepadContent = document.getElementById('notepadContent');

function saveNote() {
  const noteContent = notepadContent.value;
  // Tutaj można dodać logikę zapisu notatki, np. do localStorage
  alert('Note saved successfully!');
}
