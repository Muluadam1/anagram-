/*The following code follows a slightly different approach. Instead of sorting the characters, 
it creates frequency maps for both strings using objects. 
Each key-value pair in the frequency map represents a character and its 
frequency (number of occurrences) in the respective string. 
It then compares the frequency maps to determine if the strings are anagrams.
 */
function isAnagram(str1, str2) {
    // Remove whitespace and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const frequencyMap1 = {};
    const frequencyMap2 = {};

    // Populate frequency map for str1
    for (let char of str1) {
        frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }

    // Populate frequency map for str2
    for (let char of str2) {
        frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
    }

    // Compare the frequency maps
    for (let char in frequencyMap1) {
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }

    return true;
}

// Test the function

function main() {
    const string1 = "Conversation";
    const string2 = "Voices rant on";

    if (isAnagram(string1, string2)) {
        console.log(string1 + " and " + string2 + " are anagrams.");
    } else {
        console.log(string1 + " and " + string2 + " are not anagrams.");
    }
}
main();