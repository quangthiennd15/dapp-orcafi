export default function addressEllipsis(
  address?: string,
  numberToShow = 4
): string {
  if (!address) return "";
  return `${address.substring(0, numberToShow)}...${address.substring(
    address.length - numberToShow
  )}`;
}
