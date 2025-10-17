import { describe, expect, it } from 'vitest';

import { formatDuration } from '../utils.js';

describe('formatDuration()', () => {
  it('should display a formatted version of a seconds-value', () => {
    expect(formatDuration(0.53888)).toEqual('0:00.539');
    expect(formatDuration(55.43)).toEqual('0:55.430');
    expect(formatDuration(109)).toEqual('1:49.000');
    expect(formatDuration(129.35222222)).toEqual('2:09.352');
  });
});
