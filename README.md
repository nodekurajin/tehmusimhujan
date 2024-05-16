# TEA Boil Timer

This function takes two arguments:

- `boilTime`: The desired boiling time for the tea in minutes (number).
- `callback (optional)`: A function to be called when the timer finishes (function).

The function first checks if boilTime is a valid number and throws an error if not. Then, it logs a message indicating the timer has started. It converts the boilTime in minutes to milliseconds and uses setTimeout to simulate the timer countdown.

When the timer finishes, it logs a message indicating the tea is ready and optionally calls the provided callback function.