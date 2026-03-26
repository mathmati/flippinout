import { Board } from './Board.js';
import { SoundEngine } from './SoundEngine.js';
import { MessageRotator } from './MessageRotator.js';
import { KeyboardController } from './KeyboardController.js';
import { ThemeManager } from './ThemeManager.js';
import { ClockMode } from './ClockMode.js';

document.addEventListener('DOMContentLoaded', () => {
  const boardContainer = document.getElementById('board-container');
  const soundEngine = new SoundEngine();
  
  // Create theme manager first (needed by board)
  const themeManager = new ThemeManager(null); // Will be set after board creation
  
  const board = new Board(boardContainer, soundEngine, themeManager);
  themeManager.boardEl = board.boardEl; // Set board element for theme updates
  
  const rotator = new MessageRotator(board);
  const clockMode = new ClockMode(board);
  const keyboard = new KeyboardController(rotator, soundEngine);
  
  let isClockMode = false;
  
  // Enhanced keyboard controls
  document.addEventListener('keydown', (e) => {
    // Theme cycling with 'T' key
    if (e.key === 't' || e.key === 'T') {
      const themeName = themeManager.cycleTheme();
      showNotification(`Theme: ${themeName}`);
    }
    
    // Clock mode toggle with 'C' key
    if (e.key === 'c' || e.key === 'C') {
      isClockMode = !isClockMode;
      if (isClockMode) {
        rotator.stop();
        clockMode.start();
        showNotification('Clock Mode ON');
      } else {
        clockMode.stop();
        rotator.start();
        showNotification('Message Mode ON');
      }
    }
  });

  // Initialize audio on first user interaction (browser autoplay policy)
  let audioInitialized = false;
  const initAudio = async () => {
    if (audioInitialized) return;
    audioInitialized = true;
    await soundEngine.init();
    soundEngine.resume();
    document.removeEventListener('click', initAudio);
    document.removeEventListener('keydown', initAudio);
  };
  document.addEventListener('click', initAudio);
  document.addEventListener('keydown', initAudio);

  // Start message rotation
  rotator.start();

  // Volume toggle button in header
  const volumeBtn = document.getElementById('volume-btn');
  if (volumeBtn) {
    volumeBtn.addEventListener('click', () => {
      initAudio();
      const muted = soundEngine.toggleMute();
      volumeBtn.classList.toggle('muted', muted);
    });
  }

  // "Get Early Access" button: scroll to board and go fullscreen
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      initAudio();
      boardContainer.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.documentElement.requestFullscreen().catch(() => {});
      }, 400);
    });
  }

  // Mobile settings flip tiles
  const leftSettingTile = document.getElementById('left-setting-tile');
  const rightSettingTile = document.getElementById('right-setting-tile');
  
  // Left tile: "Th" cycles through themes
  const themeLabels = ['Th', 'Am', 'Gr', 'Bl'];
  let themeIndex = 0;
  
  if (leftSettingTile) {
    leftSettingTile.addEventListener('click', () => {
      leftSettingTile.classList.add('flipping');
      
      setTimeout(() => {
        // Cycle theme
        const themeName = themeManager.cycleTheme();
        themeIndex = (themeIndex + 1) % themeLabels.length;
        leftSettingTile.textContent = themeLabels[themeIndex];
        
        showNotification(`Theme: ${themeName}`);
        leftSettingTile.classList.remove('flipping');
      }, 150);
    });
  }
  
  // Right tile: gear icon cycles through options
  const rightOptions = ['⚙', '⏰', '⛶'];
  const rightActions = ['settings', 'clock', 'fullscreen'];
  let rightIndex = 0;
  
  if (rightSettingTile) {
    rightSettingTile.addEventListener('click', () => {
      rightSettingTile.classList.add('flipping');
      
      setTimeout(() => {
        rightIndex = (rightIndex + 1) % rightOptions.length;
        const newIcon = rightOptions[rightIndex];
        const action = rightActions[rightIndex];
        
        rightSettingTile.textContent = newIcon;
        
        if (action === 'clock') {
          // Toggle clock mode
          isClockMode = !isClockMode;
          if (isClockMode) {
            rotator.stop();
            clockMode.start();
            showNotification('Clock Mode ON');
          } else {
            clockMode.stop();
            rotator.start();
            showNotification('Messages ON');
          }
        } else if (action === 'fullscreen') {
          // Toggle fullscreen
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        }
        // If action === 'settings', do nothing (just shows gear icon)
        
        rightSettingTile.classList.remove('flipping');
      }, 150);
    });
  }
  
  // Notification system for theme/mode changes
  function showNotification(message) {
    const existing = document.querySelector('.mode-notification');
    if (existing) existing.remove();
    
    const notif = document.createElement('div');
    notif.className = 'mode-notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('visible'), 10);
    setTimeout(() => {
      notif.classList.remove('visible');
      setTimeout(() => notif.remove(), 300);
    }, 2000);
  }
});
