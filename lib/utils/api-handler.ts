/**
 * handler to fetch data from the given url and returns the result
 * @param url - url to fetch
 * @param options - fetch options
 */
export default async function apiHandler<T>(
  url: string,
  options?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(url, options);
  const result = await response.json();
  if (result.error) throw Error(result);
  return result as T;
}
