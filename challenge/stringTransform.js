function transformString(str) {
    const length = str.length;
    
    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string and then convert each character to its ASCII code
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    
    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        return str.split('').reverse().join('');
    }
    
    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    // If none of the above conditions are met, return the original string
    return str;
}

// Example usage:
console.log(transformString("Hamburger"));           // Output: "regrubmaH"
console.log(transformString("Pizza"));               // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));// Output: "eikooCpihCetalocohC"
