/* const texts=["E","Ea","Eat","Eat","Ea","E","","C","Co","Cod","Code","Code","Cod","Co","C","","S","Sl","Sle","Slee","Sleep","Sleep","Slee","Sle","Sl","S","","R","Re","Rep","Repe","Repea","Repeat","Repeat","Repea","Repe","Rep","Re","R",""]; */
var text="";
const fullText1 = "Meet your friends & relatives.";
const fullText2 = "Chatting, Calling & Vedio Calling.";
const fullText3 = "Upload your own Posts & Stories";
const texts=[""];
for (let i = 1; i <= fullText1.length; i++) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText1);
}
for (let i = fullText1.length; i >= 0; i=i-2) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 1; i <= fullText2.length; i++) {
    text=fullText2.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText2);
}
for (let i = fullText2.length; i >= 0; i=i-2) {
    text=fullText2.slice(0,i);
    texts.push(text);
}
for (let i = 1; i <= fullText3.length; i++) {
    text=fullText3.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText3);
}
for (let i = fullText3.length; i >= 0; i=i-2) {
    text=fullText3.slice(0,i);
    texts.push(text);
}



var i=0,j=0;
const arrayLen = texts.length;
function Screen() {
   setInterval(function () {
       if (i==arrayLen) {
           i=0;
       }
       text = texts[i++];
        document.getElementById("text").innerHTML=text;
   },100)
   setInterval(function(){
       if(j==0){
           document.getElementById("span").style.opacity=0;
       }
       if(j==1){
           document.getElementById("span").style.opacity=0.25;
       }
       if(j==2){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==3){
           document.getElementById("span").style.opacity=1;
       }
       if(j==4){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==5){
           document.getElementById("span").style.opacity=0.25;
       }
       if (j==6) {
          document.getElementById("span").style.opacity=0;
       }
       j++;
       if (j==7) {
        j=0;
       }
   },100);
}
Screen();

// FOR LOADER

function loaded(){ 
    document.getElementById("loading").style.display = "none";
 }
