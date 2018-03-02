/**
 * Returns passed string with upper-cased first letter
 */
export default function capitalize(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}
