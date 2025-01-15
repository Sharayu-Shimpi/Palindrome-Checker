function checkPalindrome() {
    
    const inputText = document.getElementById("input-text").value;


    const cleanedText = inputText.replace(/\s+/g, '').toLowerCase();


    const reversedText = cleanedText.split('').reverse().join('');
    const resultMessage = (cleanedText === reversedText) ? "Yes, it's a palindrome!" : "No, it's not a palindrome.";

    document.getElementById("result-container").innerText = resultMessage;
}
