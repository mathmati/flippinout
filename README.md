# FlipOff Enhanced — Vintage Split-Flap Display

An enhanced fork of [magnum6actual/flipoff](https://github.com/magnum6actual/flipoff) with improved mechanics, vintage themes, and clock mode.

## ✨ New Features

### 🎨 Four Vintage Themes
- **Classic White** — Modern split-flap (original style)
- **Vintage Amber** — 1970s airport terminals
- **Terminal Green** — Old-school CRT displays  
- **Airport Blue** — Modern travel hub aesthetic

Press **T** to cycle through themes

### ⏰ Live Clock Mode
- Real-time clock display with date
- Mechanical flip animation on every second
- Toggle with **C** key

### 🔧 Enhanced Mechanics
- **More authentic timing** — Slower, more deliberate flips (1.2s vs 0.8s scramble)
- **Better animation** — Mechanical bounce and overshoot on settle
- **Improved stagger** — 35ms delay between tiles (was 25ms)
- **Glowing accents** — Theme-colored indicators with glow effects
- **Vintage grain** — Subtle texture overlay for retro feel

### 🎯 Better Visuals
- **Larger tiles** — 40-68px (was 36-62px) for better legibility
- **Improved contrast** — Text shadow and glow for each theme
- **Deeper shadows** — More 3D depth on tiles
- **Smoother gaps** — 4-6px spacing (was 3-5px)

## 🎹 Keyboard Controls

| Key | Action |
|-----|--------|
| **Enter** | Next message |
| **←** | Previous message |
| **C** | Toggle clock mode |
| **T** | Cycle theme |
| **F** | Fullscreen |
| **M** | Mute/unmute |
| **N** | Show shortcuts |

## 🚀 Quick Start

1. Open `index.html` in a browser
2. Click "Try It Now" or press **F** for fullscreen
3. Press **C** for clock mode
4. Press **T** to change themes

## 🎬 Perfect For

- **Office lobbies** — Display time or rotating quotes
- **Home decor** — Vintage aesthetic on any TV
- **Events** — Retro countdown or info boards
- **Streaming overlays** — OBS browser source with character
- **Waiting rooms** — Calming mechanical animation

## 📦 What Changed

### Code Improvements
- `ThemeManager.js` — New theme system with CSS variables
- `ClockMode.js` — Live clock display with date
- Enhanced timing constants for more authentic feel
- Theme-aware tile scramble colors
- Better animation easing curves

### Visual Enhancements
- Vintage grain texture overlay
- Glow effects on accent indicators
- Improved tile shadows and depth
- Larger, more legible font (55% vs 52% of tile size)
- Font weight 900 (was 700) for boldness

### UX Polish
- On-screen notification for theme/mode changes
- Keyboard hints in hero section
- Updated shortcuts overlay
- Better CTAs and copy

## 🎨 Theme Details

Each theme includes:
- Custom text color with glow
- Background colors (tile and board)
- 5 scramble animation colors
- 3 accent indicator colors

## 📝 Credits

Original: [magnum6actual/flipoff](https://github.com/magnum6actual/flipoff)  
Enhanced by: Clawd (Mathew's AI assistant)

## 📄 License

Same as original — check original repo for license details.

---

**Press T to cycle themes · Press C for clock · Press F for fullscreen**
