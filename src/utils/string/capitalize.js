/* @flow */

/**
 * Returns passed string with upper-cased first letter
 */
export default function capitalize(str: string): string {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}
