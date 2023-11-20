export default function addressEllipsis(
  address: string,
  numberToShow = 4
): string {
  return `${address.substring(0, numberToShow)}...${address.substring(
    address.length - numberToShow
  )}`;
}
