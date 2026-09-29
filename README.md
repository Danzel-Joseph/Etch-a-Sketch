# Etch-a-Sketch
# Etch-a-Sketch

A browser-based sketch pad built with HTML, CSS, and vanilla JavaScript. Hover over the grid to "draw" with random rainbow colors.

## Features

- **Hover to draw:** moving the mouse over a square colors it with a random rainbow color (red, orange, yellow, blue, green, indigo, or violet).
- **Reset Grid:** clears the board and returns to the default 16x16 grid.
- **Modify Grid:** asks for a new grid size (e.g. `20` gives a 20x20 grid) and rebuilds the board.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser.

No installs or build steps needed.

## Project Structure

```
.
├── index.html   # Page layout and buttons
├── style.css    # Styling for the sidebar and grid
├── script.js    # Grid creation, random colors, button logic
└── README.md
```

## How It Works

- `createGrid(size)` uses two nested loops to create `size x size` buttons and lays them out with CSS Grid.
- `addColor()` picks a random number from 1 to 7 and maps it to a color.
- A `mouseover` listener on each square applies a new random color.
- The Reset and Modify buttons clear the container and call `createGrid()` again.

## Known Limitations

- Squares have a fixed size, so large grids can overflow the 960px board.
- The size prompt does not validate input yet (empty, non-numeric, or very large values).

## Ideas for Improvement

- Scale square size automatically to fit the board for any grid size.
- Limit the size input to a sensible range (e.g. 1 to 100).
- Add a progressive-darkening mode and an eraser.

## Author

Danzel Agbeko# Etch-a-Sketch

A browser-based sketch pad built with HTML, CSS, and vanilla JavaScript. Hover over the grid to "draw" with random rainbow colors.

## Features

- **Hover to draw:** moving the mouse over a square colors it with a random rainbow color (red, orange, yellow, blue, green, indigo, or violet).
- **Reset Grid:** clears the board and returns to the default 16x16 grid.
- **Modify Grid:** asks for a new grid size (e.g. `20` gives a 20x20 grid) and rebuilds the board.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser.

No installs or build steps needed.

## Project Structure

```
.
├── index.html   # Page layout and buttons
├── style.css    # Styling for the sidebar and grid
├── script.js    # Grid creation, random colors, button logic
└── README.md
```

## How It Works

- `createGrid(size)` uses two nested loops to create `size x size` buttons and lays them out with CSS Grid.
- `addColor()` picks a random number from 1 to 7 and maps it to a color.
- A `mouseover` listener on each square applies a new random color.
- The Reset and Modify buttons clear the container and call `createGrid()` again.

## Known Limitations

- Squares have a fixed size, so large grids can overflow the 960px board.
- The size prompt does not validate input yet (empty, non-numeric, or very large values).

## Ideas for Improvement

- Scale square size automatically to fit the board for any grid size.
- Limit the size input to a sensible range (e.g. 1 to 100).
- Add a progressive-darkening mode and an eraser.

## Author

Danzel Agbeko# Etch-a-Sketch

A browser-based sketch pad built with HTML, CSS, and vanilla JavaScript. Hover over the grid to "draw" with random rainbow colors.

## Features

- **Hover to draw:** moving the mouse over a square colors it with a random rainbow color (red, orange, yellow, blue, green, indigo, or violet).
- **Reset Grid:** clears the board and returns to the default 16x16 grid.
- **Modify Grid:** asks for a new grid size (e.g. `20` gives a 20x20 grid) and rebuilds the board.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser.

No installs or build steps needed.

## Project Structure

```
.
├── index.html   # Page layout and buttons
├── style.css    # Styling for the sidebar and grid
├── script.js    # Grid creation, random colors, button logic
└── README.md
```

## How It Works

- `createGrid(size)` uses two nested loops to create `size x size` buttons and lays them out with CSS Grid.
- `addColor()` picks a random number from 1 to 7 and maps it to a color.
- A `mouseover` listener on each square applies a new random color.
- The Reset and Modify buttons clear the container and call `createGrid()` again.

## Known Limitations

- Squares have a fixed size, so large grids can overflow the 960px board.
- The size prompt does not validate input yet (empty, non-numeric, or very large values).

## Ideas for Improvement

- Scale square size automatically to fit the board for any grid size.
- Limit the size input to a sensible range (e.g. 1 to 100).
- Add a progressive-darkening mode and an eraser.

## Author

Danzel Agbeko