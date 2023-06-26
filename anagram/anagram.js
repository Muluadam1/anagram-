/*The following code takes two strings as input and checks if they are anagrams. 
It removes whitespace and converts the strings to lowercase for case-insensitive comparison.
It then sorts the characters in each string, joins them back into strings, and compares them. 
If the sorted strings are equal, the original strings are anagrams. 
Otherwise, they are not anagrams.
 */
function isAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and join them back to strings
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
function main() {
    var string1 = "Schoolmaster";
    var string2 = "The classroom";

    if (isAnagram(string1, string2)) {
        console.log(string1 + " and " + string2 + " are anagrams.");
    } else {
        console.log(string1 + " and " + string2 + " are not anagrams.");
    }
}
main();