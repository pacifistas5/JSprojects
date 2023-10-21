document.addEventListener("DOMContentLoaded", function () {
  const quote = document.getElementById("content");

  const author = document.getElementById("author");

  const apiURL = "https://api.quotable.io/random";

  const getRandomQuote = document.getElementById("getRandomQuote");

  getRandomQuote.addEventListener("click", () => {
    getQuote(apiURL);
  });

  const tweeterWindow = document.getElementById("tweeterWindow");

  const facebookShare = document.getElementById("facebookShare");

  tweeterWindow.addEventListener("click", () => {
    tweet();
  });

  facebookShare.addEventListener("click", () => {
    shareOnFacebook(quote.innerHTML, author.innerHTML);
  });

  async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  }

  getQuote(apiURL);

  function tweet() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        quote.innerHTML +
        " --- by " +
        author.innerHTML,
      "Tweet window",
      "width=600",
      "height=300"
    );
  }

  function shareOnFacebook(quote, author) {
    const facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    const quoteText = encodeURIComponent(`"${quote}" - ${author}`);
    const shareUrl = `${facebookUrl}${quoteText}`;

    // Open the Facebook Share Dialog in a new window
    window.open(shareUrl, "Share on Facebook", "width=600, height=300");
  }
});
