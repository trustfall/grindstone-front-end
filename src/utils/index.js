export const rgb2hex = rgb => {
  rgb = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgb && rgb.length === 4
    ? '#' +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : '';
};

export const rgbaObjectToString = rgbaObj => {
  return `rgba(${rgbaObj.r}, ${rgbaObj.g}, ${rgbaObj.b}, ${rgbaObj.a
    ? rgbaObj.a
    : 1})`;
};
