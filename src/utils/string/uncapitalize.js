/**
 * Returns passed string with lower-cased first letter
 */
export default function uncapitalize(str) {
  return str.substr(0, 1).toLowerCase() + str.substr(1);
}
