/**
 * Sorts an array of objects by a specified property.
 * 
 * @template T - The type of the objects in the array.
 * @param {T[]} arr - The array of objects to be sorted.
 * @param {keyof T} property - The property by which to sort the objects.
 * @returns {T[]} - The sorted array of objects.
 * 
 * @example
 * // Define an interface for your objects
 * interface Person {
 *   Name: string;
 *   'Favorite Food': string;
 *   'Favorite Movie': string;
 *   Status: string;
 *   Date?: string;
 * }
 * 
 * // Create an array of Person objects
 * const people: Person[] = [
 *   { Name: 'Alice', 'Favorite Food': 'Pizza', 'Favorite Movie': 'Inception', Status: 'Active' },
 *   { Name: 'Bob', 'Favorite Food': 'Burger', 'Favorite Movie': 'Matrix', Status: 'Inactive' }
 * ];
 * 
 * // Sort the array by Name
 * const sortedPeople = sortByProperty(people, 'Name');
 * console.log(sortedPeople);
 */
export const sortByProperty = <T>(arr: T[], property: keyof T): T[] => {
  return arr.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  });
};
