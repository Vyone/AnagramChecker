function clean(word) {
    return word
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .sort()
        .join('');
}

function areAnagrams(word1, word2) {
    const cleanedWord1 = clean(word1);
    const cleanedWord2 = clean(word2);
    const result = document.getElementById("result");

    if (cleanedWord1 == '' || cleanedWord2 == '') {
        result.textContent = "Please enter valid word!";
        result.style.color = "#e28a8aff";
    } else if (cleanedWord1 == cleanedWord2) {
        result.textContent = "Yes, they are anagrams!";
        result.style.color = "green";
    } else {
        result.textContent = "No, they are not anagrams!";
        result.style.color = "red";
    }
}

function fillWords(word1, word2) {
    document.getElementById("word1").value = word1;
    document.getElementById("word2").value = word2;

    areAnagrams(word1, word2);
}