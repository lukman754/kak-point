// sispema-toggle.js - Handles the toggle functionality for SISPEMA popup

// Toggle button styles
const toggleButtonStyle = `
  #sispema-toggle-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #000;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.2s ease;
  }
  
  #sispema-toggle-btn:hover {
    transform: scale(1.05);
    background: #333;
  }
  #sispema-toggle-btn:disabled {
    background-color: #cccccc;
    cursor: wait;
  }
`;

// Initialize the toggle button
function initToggleButton() {
  console.log('sispema-toggle: Initializing toggle button...');
  
  // Add styles if not already added
  if (!document.querySelector('style#sispema-toggle-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'sispema-toggle-styles';
    styleElement.textContent = toggleButtonStyle;
    document.head.appendChild(styleElement);
  }

  // Add toggle button if not exists
  let toggleBtn = document.getElementById('sispema-toggle-btn');
  if (!toggleBtn) {
    console.log('sispema-toggle: Creating toggle button...');
    
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'sispema-toggle-btn';
    toggleBtn.innerHTML = '<i class="fas fa-chart-bar"></i>';
    toggleBtn.title = 'Tampilkan Ringkasan Nilai';
    document.body.appendChild(toggleBtn);
    
    // Add click handler
    toggleBtn.addEventListener('click', async (e) => {
      console.log('sispema-toggle: Toggle button clicked');
      e.preventDefault();
      
      // Show loading state
      toggleBtn.disabled = true;
      toggleBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      
      try {
        // If sispema is not loaded yet, wait for it
        if (!window.sispema) {
          console.log('sispema-toggle: Waiting for sispema to load...');
          await new Promise((resolve) => {
            const checkSispema = setInterval(() => {
              if (window.sispema) {
                clearInterval(checkSispema);
                console.log('sispema-toggle: sispema loaded');
                resolve();
              }
            }, 100);
          });
        }
        
        // Initialize if not already done
        if (typeof window.sispema.init === 'function') {
          console.log('sispema-toggle: Initializing sispema...');
          window.sispema.init();
        }
        
        // Show the popup
        console.log('sispema-toggle: Showing popup...');
        if (typeof togglePopup === 'function') {
          togglePopup(true);
        } else if (window.sispema && typeof window.sispema.run === 'function') {
          await window.sispema.run();
        }
      } catch (error) {
        console.error('sispema-toggle: Error in click handler:', error);
        toggleBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        toggleBtn.title = 'Error loading data. Click to retry.';
      } finally {
        // Reset button state
        if (toggleBtn) {
          toggleBtn.innerHTML = '<i class="fas fa-chart-bar"></i>';
          toggleBtn.title = 'Tampilkan Ringkasan Nilai';
          toggleBtn.disabled = false;
        }
      }
    });
  }
}

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
  console.log('sispema-toggle.js: Document is defined, setting up initialization...');
  
  const init = () => {
    console.log('sispema-toggle.js: Initializing...');
    
    // Add Font Awesome if not already added
    if (!document.querySelector('link[href*="font-awesome"]')) {
      console.log('sispema-toggle.js: Adding Font Awesome...');
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fontAwesomeLink);
    }
    
    console.log('sispema-toggle.js: Initializing toggle button...');
    initToggleButton();
  };

  // Add some styles for the toggle button
  const style = document.createElement('style');
  style.textContent = `
    #sispema-toggle-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #4CAF50;
      color: white;
      border: none;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      cursor: pointer;
      font-size: 24px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #sispema-toggle-btn:hover {
      background-color: #45a049;
    }
  `;
  document.head.appendChild(style);
  
  // Initialize immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    console.log('sispema-toggle.js: Waiting for DOM to load...');
    document.addEventListener('DOMContentLoaded', () => {
      console.log('sispema-toggle.js: DOM fully loaded, initializing...');
      try {
        init();
        console.log('sispema-toggle.js: Initialization complete');
      } catch (error) {
        console.error('sispema-toggle.js: Error during initialization:', error);
      }
    });
  } else {
    console.log('sispema-toggle.js: DOM already loaded, initializing immediately...');
    try {
      init();
      console.log('sispema-toggle.js: Initialization complete');
    } catch (error) {
      console.error('sispema-toggle.js: Error during initialization:', error);
    }
  }
}
