/*
 * deep merge of two metadatacache link maps (resolved and unresolved links)
 */
export const deepMerge = (a: Record<string, Record<string, number>>, b: Record<string, Record<string, number>>): any => {
  const result: Record<string, Record<string, number>> = { ...a };
  for (const key in b) {
    if (b.hasOwnProperty(key))
      result[key] = result.hasOwnProperty(key) ? { ...result[key], ...b[key]! } : b[key]!;
    }
  return result;
}