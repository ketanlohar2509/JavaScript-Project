// getElementsByTagName ---> It always Returns an array
const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const tweetBtn = document.querySelector(".tweet_btn");

const apiLink = "https://quotes-api-self.vercel.app/quote";

// Global Var
let temp;


// API Call ---> Aynch Await

const getData = async ()=> {
    const response = await fetch(apiLink);
    const data = await response.json();
    // console.log(data);
    // console.log(data.author);
    // console.log(data.quote);
    
    quote.innerText = data.quote;
    author.innerText = data.author;
    temp = data.quote;
    console.log(temp);
};

// Function call
getData();

newQuote.addEventListener("click", ()=> {
    getData();
})

// window.open(link, name, specification) ---> Open a new window
tweetBtn.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + temp, "tweet post", "width=400, height=400" );
})


// console.log("quote is : " + temp);

// Dynamically change the text
// quote.innerText = "Motivational Quote";

// author.innerText = "Nihal Singh";