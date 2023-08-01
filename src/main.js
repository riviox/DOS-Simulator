// Funkcja do obsługi przeciągania okna aplikacji
function dragWindow(event) {
    if (activeWindow) {
      event.preventDefault();
      const x = event.clientX - activeWindow.offsetX;
      const y = event.clientY - activeWindow.offsetY;
      activeWindow.style.left = x + 'px';
      activeWindow.style.top = y + 'px';
    }
  }
  
  // Przypisz zdarzenia do przeciągania okna aplikacji
  const appWindows = document.getElementsByClassName('app-window');
  let activeWindow = null;
  for (let i = 0; i < appWindows.length; i++) {
    const titlebar = appWindows[i].querySelector('.app-titlebar');
    titlebar.addEventListener('mousedown', (event) => {
      activeWindow = appWindows[i];
      activeWindow.style.zIndex = 999;
      activeWindow.offsetX = event.clientX - activeWindow.offsetLeft;
      activeWindow.offsetY = event.clientY - activeWindow.offsetTop;
    });
  
    window.addEventListener('mouseup', () => {
      if (activeWindow) {
        activeWindow.style.zIndex = 2;
        activeWindow = null;
      }
    });
  }
  
  window.addEventListener('mousemove', dragWindow);
  
  // Funkcja do obsługi otwierania aplikacji
  function openApp(appName) {
    const appToOpen = document.getElementById(`${appName}App`);
    appToOpen.style.display = 'block';
  
    // Przywróć ustawienia dla okna, jeśli zostało wcześniej zamknięte
    appToOpen.style.top = '50px';
    appToOpen.style.left = '50px';
    appToOpen.style.zIndex = 2;
  }
  
  // Funkcja do zamykania aplikacji
  function closeApp(appId) {
    const appToClose = document.getElementById(appId);
    appToClose.style.display = 'none';
  }
  