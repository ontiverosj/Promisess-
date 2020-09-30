let starwars = "http://api.wordnik.com/v4/word.json/{word}/definitions "
let starwarsgiphy = "http://api.giphy.com/v1/gifs/search"


fetch(starwars)
.then(response => response.json)
.then(json => console.log(json))
.catch(err => console.log(err))


function setup(){
    noCanvas();
    delay(1000)
    .then(() => createP('hello'))
    .catch((err) => console.error(err));
}



//modify 
 async function delayES8(time){
//this funcition returns a promise 
   await  delay(time);
   await someThingElse();
   let val = await somethingElseElse();
   return val ;
}





function delay(time) { 
    return new Promise((resolve, reject) => {

        if(isNaN(time)) {
            reject(new Error('Delay requires a valid number'))
        }else {
        setTimeout(resolve, time);
        }
    });
    

}


//syntax sugar 
// async/await

function setup(){ 
noCanvas(); 
wordGIF();
then(results => {
    createP(results.word);
    createImg(results.img);
})
.catch(err => console.error(err));

}

 async function wordGIF( ){
 let  response =  await fetch( startwars)
 let json = await response.json( );
let word = json1.word;
let response2 = await response2.json();
let img = json2.data[0].images['fixed_height']


return { 
    word: json1.word, 
    ing: img_url,
}

} 