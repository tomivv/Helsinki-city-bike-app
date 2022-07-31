/**
 * 
 * @param str String which needs first letter to be capital
 * @return Returns string with capital first letter
 */
export function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * 
 * @param obj Takes object as parameter
 * @returns String array from provided parameter
 */
export function objectToListItemForm(obj: object) {

  const values: string[] = [];

  if (Object.keys(obj).includes('distance')) {
    Object.entries(obj).forEach(entry => {
      if (entry[0] === 'duration') {
        values.push(`${(entry[1] / 60).toFixed(2)} min`);
      }
      else if (entry[0] === 'distance') {
        values.push(`${(entry[1] / 1000).toFixed(2)} km`);
      }
      else {
        values.push(entry[1]);
      }
    });
    return values;
  }

  Object.values(obj).forEach(value => {
    values.push(value);
  });

  return values;
}