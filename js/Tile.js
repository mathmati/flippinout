import { CHARSET, SCRAMBLE_COLORS, SCRAMBLE_DURATION, FLIP_DURATION } from './constants.js';

export class Tile {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.currentChar = ' ';
    this.isAnimating = false;
    this._scrambleTimer = null;

    // Build DOM
    this.el = document.createElement('div');
    this.el.className = 'tile';

    this.innerEl = document.createElement('div');
    this.innerEl.className = 'tile-inner';

    this.frontEl = document.createElement('div');
    this.frontEl.className = 'tile-front';
    this.frontSpan = document.createElement('span');
    this.frontEl.appendChild(this.frontSpan);

    this.backEl = document.createElement('div');
    this.backEl.className = 'tile-back';
    this.backSpan = document.createElement('span');
    this.backEl.appendChild(this.backSpan);

    this.innerEl.appendChild(this.frontEl);
    this.innerEl.appendChild(this.backEl);
    this.el.appendChild(this.innerEl);
  }

  setChar(char) {
    this.currentChar = char;
    this.frontSpan.textContent = char === ' ' ? '' : char;
    this.backSpan.textContent = '';
    this.frontEl.style.backgroundColor = '';
  }

  scrambleTo(targetChar, delay, scrambleColors) {
    if (targetChar === this.currentChar) return;

    // Cancel any in-progress animation
    if (this._scrambleTimer) {
      clearInterval(this._scrambleTimer);
      this._scrambleTimer = null;
    }
    this.isAnimating = true;

    const colors = scrambleColors || SCRAMBLE_COLORS;

    setTimeout(() => {
      this.el.classList.add('scrambling');
      let scrambleCount = 0;
      const maxScrambles = 12 + Math.floor(Math.random() * 6);
      const scrambleInterval = 65;

      this._scrambleTimer = setInterval(() => {
        // Random character with mechanical feel - prefer nearby characters
        let randChar;
        if (Math.random() < 0.3 && targetChar !== ' ') {
          // Sometimes show target character early (mechanical behavior)
          randChar = targetChar;
        } else {
          randChar = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
        this.frontSpan.textContent = randChar === ' ' ? '' : randChar;

        // Cycle background color
        const color = colors[scrambleCount % colors.length];
        this.frontEl.style.backgroundColor = color;

        // Adjust text color for contrast
        if (color === '#FFFFFF' || color === '#FFCC00' || color === '#FFB000') {
          this.frontSpan.style.color = '#111';
        } else {
          this.frontSpan.style.color = '';
        }

        scrambleCount++;

        if (scrambleCount >= maxScrambles) {
          clearInterval(this._scrambleTimer);
          this._scrambleTimer = null;

          // Reset colors
          this.frontEl.style.backgroundColor = '';
          this.frontSpan.style.color = '';

          // Set the final character with mechanical settling animation
          this.frontSpan.textContent = targetChar === ' ' ? '' : targetChar;

          // Mechanical flip settle: slight overshoot and bounce
          this.innerEl.style.transition = `transform ${FLIP_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
          this.innerEl.style.transform = 'perspective(600px) rotateX(-12deg)';

          setTimeout(() => {
            this.innerEl.style.transform = 'perspective(600px) rotateX(3deg)';
            setTimeout(() => {
              this.innerEl.style.transform = '';
              setTimeout(() => {
                this.innerEl.style.transition = '';
                this.el.classList.remove('scrambling');
                this.currentChar = targetChar;
                this.isAnimating = false;
              }, FLIP_DURATION / 2);
            }, FLIP_DURATION / 3);
          }, FLIP_DURATION / 2);
        }
      }, scrambleInterval);
    }, delay);
  }
}
