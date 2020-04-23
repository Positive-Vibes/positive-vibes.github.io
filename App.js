const quote=document.getElementById('quoter');
const hooman=document.getElementById('human');
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
async function randomQuote() {
  quote.innerText="a vibe is loading...";
  var ra=Math.floor(scale(Math.random(),0,1,0,11));
  const response = await fetch('https://api.quotable.io/random?maxLength==9');
  const data = await response.json();
  console.log(data.content);
  console.log(ra);
  hooman.src="./assets/human/"+ra+".png"
  quote.innerText=data.content;

}
randomQuote()
