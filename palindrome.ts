function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  function checkPalindromes(words: string[]): void {
    words.forEach((word, index) => {
      const isPalindromic = isPalindrome(word);
      console.log(`kata ${index + 1}: "${word}" ${isPalindromic ? '' : ' bukan'} palindrome.`);
    });
  }
  
  const inputWords: string[] = ['level', 'kanan', 'sugus', 'kodok', 'lampu', 'aba'];
  
  checkPalindromes(inputWords);
  