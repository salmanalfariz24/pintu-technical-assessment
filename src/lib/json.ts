export function safeParse<T = Record<string, unknown>>(data: string): T | null {
  try {
    const safe = JSON.parse(data);
    return safe;
  } catch (error) {
    return null;
  }
}
