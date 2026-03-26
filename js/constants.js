export const GRID_COLS = 22;
export const GRID_ROWS = 5;

// More authentic mechanical timing
export const SCRAMBLE_DURATION = 1200;
export const FLIP_DURATION = 180;
export const STAGGER_DELAY = 35;
export const TOTAL_TRANSITION = 5000;
export const MESSAGE_INTERVAL = 6000;

export const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-!?\'/: ';

// Vintage display themes
export const THEMES = {
  classic: {
    name: 'Classic White',
    textColor: '#FFFFFF',
    bgColor: '#222',
    boardBg: '#1A1A1A',
    scrambleColors: ['#00AAFF', '#00FFCC', '#AA00FF', '#FF2D00', '#FFCC00', '#FFFFFF'],
    accentColors: ['#00FF7F', '#FF4D00', '#AA00FF', '#00AAFF', '#00FFCC']
  },
  amber: {
    name: 'Vintage Amber',
    textColor: '#FFB000',
    bgColor: '#2A1810',
    boardBg: '#1A0F08',
    scrambleColors: ['#FFB000', '#FF8800', '#FFCC00', '#FFA000', '#FF9000'],
    accentColors: ['#FFB000', '#FF8800', '#FFCC00']
  },
  green: {
    name: 'Terminal Green',
    textColor: '#00FF41',
    bgColor: '#0D1F0D',
    boardBg: '#080F08',
    scrambleColors: ['#00FF41', '#00DD33', '#00BB22', '#00FF88', '#00CC44'],
    accentColors: ['#00FF41', '#00DD33', '#00BB22']
  },
  cyan: {
    name: 'Airport Blue',
    textColor: '#00E5FF',
    bgColor: '#0A1820',
    boardBg: '#050C10',
    scrambleColors: ['#00E5FF', '#00C4DD', '#00A3BB', '#00FFFF', '#00D4EE'],
    accentColors: ['#00E5FF', '#00C4DD', '#00A3BB']
  }
};

export const SCRAMBLE_COLORS = THEMES.classic.scrambleColors;
export const ACCENT_COLORS = THEMES.classic.accentColors;

export const MESSAGES = [
  [
    '',
    'GOD IS IN',
    'THE DETAILS .',
    '- LUDWIG MIES',
    ''
  ],
  [
    '',
    'STAY HUNGRY',
    'STAY FOOLISH',
    '- STEVE JOBS',
    ''
  ],
  [
    '',
    'GOOD DESIGN IS',
    'GOOD BUSINESS',
    '- THOMAS WATSON',
    ''
  ],
  [
    '',
    'LESS IS MORE',
    '',
    '- MIES VAN DER ROHE',
    ''
  ],
  [
    '',
    'MAKE IT SIMPLE',
    'BUT SIGNIFICANT',
    '- DON DRAPER',
    ''
  ],
  [
    '',
    'HAVE NO FEAR OF',
    'PERFECTION',
    '- SALVADOR DALI',
    ''
  ],
  [
    '',
    'FORM FOLLOWS',
    'FUNCTION',
    '- LOUIS SULLIVAN',
    ''
  ],
  [
    '',
    'DESIGN IS NOT',
    'JUST WHAT IT LOOKS',
    'LIKE AND FEELS LIKE',
    'DESIGN IS HOW IT WORKS'
  ],
  [
    '',
    'SIMPLICITY IS THE',
    'ULTIMATE',
    'SOPHISTICATION',
    ''
  ],
  [
    '',
    'THE BEST WAY TO',
    'PREDICT THE FUTURE',
    'IS TO INVENT IT',
    '- ALAN KAY'
  ]
];
