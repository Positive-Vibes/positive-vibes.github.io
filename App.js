const quote=document.getElementById('quoter');
const said=document.getElementById('who');
const hooman=document.getElementById('human');

async function randomQuote() {
  hooman.src="./assets/load1.gif";
  quote.innerText="a vibe is loading...";
  said.innerText="unknown";

  const response = await fetch('https://api.quotable.io/random?maxLength==9');
  const data = await response.json();
  console.log(data.content,data.author);
  if (data){hooman.style="display:none";}
  quote.innerText=data.content;
  console.log(said);
  said.innerText=data.author;

}

waShBtn = function() {
  if( this.isIos === true ) {
    var b = [].slice.call( document.querySelectorAll(".wa_btn") );
    for (var i = 0; i < b.length; i++) {
      var t = b[i].getAttribute("data-text");
      var u = b[i].getAttribute("data-href");
      var o = b[i].getAttribute("href");
      var at = "?text=" + encodeURIComponent( t );
      if (t) {
          at += "%20%0A";
      }
      if (u) {
          at += encodeURIComponent( u );
      } else {
          at += encodeURIComponent( document.URL );
      }
      b[i].setAttribute("href", o + at);
      b[i].setAttribute("target", "_top");
      b[i].setAttribute("target", "_top");
      b[i].className += ' activeWhatsapp';
    }
  }
}

waShBtn.prototype.isIos = ((navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i)) ? true : false);

var theWaShBtn = new waShBtn();
randomQuote()
