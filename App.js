const quote=document.getElementById('quoter');
const said=document.getElementById('who');
const hooman=document.getElementById('human');
const share=document.getElementsByClassName('wb');

function copii() {
  var el = document.createElement('textarea');
    el.value ="Vibe\n"+quoter.innerText+"-"+said.innerText;
    el.text ="Vibe\n"+quoter.innerText+"-"+said.innerText;
    el.setAttribute('id', 'copyText');
    el.setAttribute('readonly', '');
    el.display="none";
    document.body.appendChild(el);
    var coptTextArea = document.getElementById('copyText');
    coptTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}
async function randomQuote() {
  hooman.src="./assets/load1.gif";
  quote.innerText="a vibe is loading...";
  said.innerText="unknown";

  const response = await fetch('https://api.quotable.io/random?maxLength==9');
  const data = await response.json();
  console.log(data.content,data.author);
  if (data){hooman.style="display:none";}
  quote.innerText='"'+data.content+'"';
  console.log(said);
  said.innerText=data.author;
  share[0].setAttribute("data-text",data.content+"-"+data.author);

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
