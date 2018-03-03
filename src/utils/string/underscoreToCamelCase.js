/* @flow */

import capitalize from './capitalize';
import uncapitalize from './uncapitalize';

/**
 * Transforms passed string's from underscore to camelCase-based words connection
 * @example underscoreToCamelCase('test_string') -> 'testString'
 */
export default function underscoreToCamelCase(str: string): string {
  return uncapitalize(str.toLowerCase().split('_').map(capitalize).join(''));
}
