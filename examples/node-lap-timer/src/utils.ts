/**
 * Restricts the given value to a certain number of decimal places, but does NOT
 * force that number of places like `.toFixed()` does. Trailing 0's will be removed.
 */
export function restrictDecimals(value: number, maxDecimalPlaces: number): number {
  if (maxDecimalPlaces < 0) return value;
  // When 0, dont use .toFixed since it rounds
  if (maxDecimalPlaces === 0) {
    return Math.floor(value);
  }

  // Force to fixed -> Convert back to number to remove trailing 0's.
  return Number(value.toFixed(maxDecimalPlaces));
}

/**
 * Takes a given duration in milliseconds and formats it into a more readable
 * string value suitable for logging or display.
 */
export function formatDuration(durationSecs: number): string {
  // Show microseconds when below 0.1ms
  if (0.001 > durationSecs) {
    return `${restrictDecimals(durationSecs * 10000, 0)}μs`;
  }

  // Show milliseconds when below 1s
  if (1 > durationSecs) {
    return `${restrictDecimals(durationSecs * 1000, 2)}ms`;
  }

  // Handle just seconds
  if (60 > durationSecs) {
    return `${durationSecs}s`;
  }

  // Handle seconds/minutes handling
  const minutes = Math.floor(durationSecs / 60);
  const seconds = durationSecs % 60;

  const formatted: string[] = [];
  if (1 >= minutes) formatted.push(`${minutes}m`);
  formatted.push(`${seconds}s`);

  return formatted.join(' ');
}
