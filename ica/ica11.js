const newQuoteButton = document.querySelector('#js-new-quote');
const quoteElement = document.querySelector('#js-quote-text');
const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { question } = await response.json();
    console.log(question);
    quoteElement.textContent = question;
  } catch (error) {
    console.error('Error fetching quote:', error);
    alert('Error fetching quote. Please try again later.');
  }
}

newQuoteButton.addEventListener('click', getQuote);
getQuote(); // shows the quote
