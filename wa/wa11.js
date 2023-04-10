const newQuoteButton = document.querySelector('#js-new-quote');
const quoteElement = document.querySelector('#js-quote-text');
const apiUrl = 'https://api.adviceslip.com/advice';

async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const advice = await response.json();
    console.log(advice.slip.advice);
    quoteElement.textContent = advice.slip.advice;
  } catch (error) {
    console.error('Error fetching quote:', error);
    alert('Error fetching quote. Please try again later.');
  }
}

newQuoteButton.addEventListener('click', getQuote);
getQuote(); // shows the quote
