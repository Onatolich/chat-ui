/* @flow */

/**
 * Returns passed string with lower-cased first letter
 */
export default function uncapitalize(str: string): string {
  return str.substr(0, 1).toLowerCase() + str.substr(1);
}
