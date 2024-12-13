export function createSelector(name: string) {
  return `${name}-${crypto.randomUUID().slice(0, 8)}`;
}
