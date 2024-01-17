function isPalindrome(input: string): boolean {
  const length = input.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    if (input[i] !== input[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const testString1 = "sugus";
const testString2 = "kanan";

console.log(`${testString1} is palindrome: ${isPalindrome(testString1)}`);
console.log(`${testString2} is palindrome: ${isPalindrome(testString2)}`);
