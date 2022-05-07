const resultSort = (sortType: string) => {
  return (a: any, b: any): any => {
    switch (sortType) {
      case "priceLow":
        return parseFloat(a.price) - parseFloat(b.price);
      case "priceHigh":
        return parseFloat(b.price) - parseFloat(a.price);
      case "alphabetically":
        return a.name.localeCompare(b.name);
      default:
        break;
    }
  };
};
export default resultSort;
