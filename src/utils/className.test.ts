import { cn } from './className';

describe('cn function tests', () => {
  test('handles string input', () => {
    expect(cn('test')).toBe('test');
  });

  test('handles array input', () => {
    expect(cn(['test', 'example'])).toBe('test example');
  });

  test('handles function input returning a string', () => {
    expect(cn(() => 'test')).toBe('test');
  });

  test('handles function input returning an array', () => {
    expect(cn(() => ['test', 'example'])).toBe('test example');
  });

  test('handles mixed input', () => {
    expect(cn(['test', () => 'example'])).toBe('test example');
  });

  test('handles empty input', () => {
    expect(cn('')).toBe('');
    expect(cn([])).toBe('');
    expect(cn(() => [])).toBe('');
  });

  test('handles array input with empty strings', () => {
    expect(cn(['', ''])).toBe('');
  });

  test('handles array input with special characters', () => {
    expect(cn(['@', '#'])).toBe('@ #');
  });
});
