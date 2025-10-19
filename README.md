# Infinite Monkey Theorem Simulator

A web application that demonstrates the Infinite Monkey Theorem through real-time simulation.

## What is the Infinite Monkey Theorem?

The infinite monkey theorem states that a monkey hitting keys independently and at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare.

This simulator generates random character strings until it matches your target phrase.

## Features

- Real-time simulation with random character generation
- Probability calculator
- Live statistics tracking attempts and characters typed
- Start/stop controls

## How to Use

1. Open `index.html` in your web browser
2. Enter a target phrase in the input field
3. View the probability calculation
4. Click "Start Simulation"
5. Watch as random strings are generated until one matches your target

### Tips

- Start with 2-3 character phrases first
- Longer phrases take exponentially longer to match
- The simulation is case-sensitive
- Uses lowercase, uppercase letters, and spaces (53 characters total)

## Example Probabilities

| Phrase Length | Character Set | Probability |
|--------------|---------------|-------------|
| 2 characters | 53 chars | 1 in 2,809 |
| 3 characters | 53 chars | 1 in 148,877 |
| 4 characters | 53 chars | 1 in 7,890,481 |
| 5 characters | 53 chars | 1 in 4.18 × 10⁸ |

## Technical Details

### Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

### How It Works

1. Randomly selects characters from a predefined set
2. Compares generated strings to the target phrase
3. Processes 1000 attempts per chunk to keep UI responsive
4. Updates statistics every 10,000 attempts

### File Structure

```
infiniteMonkey/
├── index.html      # Main HTML structure
├── style.css       # CSS styling
├── script.js       # Simulation logic
└── README.md       # This file
```

## Customization

You can customize the simulation by modifying `script.js`:

- Change the `CHARACTERS` constant to include/exclude characters
- Modify the `10000` value in line 102 to update more/less frequently
- Adjust `CHUNK_SIZE` (line 76) to process more/fewer attempts per cycle

## Performance Notes

- The simulation runs in non-blocking chunks to prevent browser freezing
- Longer phrases (5+ characters) may take a very long time to match
- The app processes approximately 1,000 attempts per millisecond on modern hardware

## Contributing

Feel free to fork this project and make improvements. Some ideas:
- Add different character sets
- Implement partial matching visualization
- Add statistics graphs
- Create difficulty presets

## License

This project is open source and available for educational purposes.

## Educational Value

This simulator is useful for:
- Understanding probability and statistics
- Demonstrating computational complexity
- Learning about random processes
- Exploring the concept of infinity in mathematics

---

Note: For practical purposes, phrases longer than 4-5 characters may take an impractically long time to match.