export function createSelector(name: string): string {
	return `${name}-${crypto.randomUUID().slice(0, 8)}`;
}
