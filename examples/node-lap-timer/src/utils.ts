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
  const roundedSecs = restrictDecimals(durationSecs, 3);

  // Calculate each individual portion of final time.
  const minutesStr = Math.floor(roundedSecs / 60);
  const seconds = roundedSecs % 60;
  const [
    secondsStrRaw = '00',
    msStrRaw = '000',
  ] = `${seconds}`.split('.');

   return `${minutesStr}:${secondsStrRaw.padStart(2, '0')}.${msStrRaw.slice(0, 3).padEnd(3, '0')}`;
}
