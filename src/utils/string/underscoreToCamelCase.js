import capitalize from './capitalize';
import uncapitalize from './uncapitalize';

/**
 * Transforms passed string's from underscore to camelCase-based words connection
 * @example underscoreToCamelCase('test_string') -> 'testString'
 */
export default function underscoreToCamelCase(str) {
  return uncapitalize(str.split('_').map(capitalize).join(''));
}
