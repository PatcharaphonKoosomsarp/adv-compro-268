function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censorText = sentece.replace(regex, '***');
    return censorText;
}

const originalPost = "JavaScript is fun, but sometimes JavaScript can be tricky.";
const censoredPost = censorWord(originalPost, "JavaScript");
console.log(censoredPost);