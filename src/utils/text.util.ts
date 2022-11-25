export function joinTxts(...texts: (string | null | undefined)[]): string {
	return texts.filter((text) => text).join(" ");
}

export function formatAddress(address: string): string {
	return `${address.substring(0, 7)}...`;
}

export const formatPrice = (price: number) => {
	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
