/* JS for WATS 3020 Text Adventure */
let playerName = "";
let choiceList = [];
let enemyName = "";
let cityName = "";
let currentPage = null;

// Prompts the user for infromation. Store vairables.
 playerName = prompt ('Name your hero:')
 enemyName = prompt('Name the archenemy of your Hero:')
 cityName = prompt('What is the name of your city?')

// Creates a function called `getCurrentPage()`. It should accept one
// parameter, which is the `slug` for the current page. This function will fetch
// the current page and return a page object using the `slug` value for a key.
function getCurrentPage(slug){
  currentPage = storyData[slug]  
  return currentPage;
}


// Creates a function called `recordChoice()` that will accept a `slug`
// parameter and add it to the `choiceList` Array (probably using `push()`).
function recordChoice(slug){
  choiceList.push(slug);
  console.log('Added ${slug} to choiceList Array')
  
}



// Creates a function called `undoChoice()` that will remove the last
// `slug` in the `choiceList` Array and then will return the last `slug` in the
// `choiceList` Array.
function undoChoice() {
  choiceList.pop(); //remove the last ietm in the 'choiceList' Array
  console.log('Returning to previous page.');
  return choiceList[choiceList.length-1];
  
  
}



//  Creates a function called `changePage()` that accepts a parameter called
// `slug` and which handles "turning the page" in three steps:
//  1. It should call the `recordChoice()` function (and give it the `slug` as
//     a parameter.
//  2. It should set the `currentPage` value by calling the `getCurrentPage()`
//     function (and give it the `slug` as a parameter).
//  4. It should give the recordChoice() the paramater of "p1"
//  3. It should invoke the `updatePage()` function (and give it the
//     `currentPage` object as a parameter).
function changePage(slug){
  //record latest choice
  recordChoice(slug);
  currentPage = getCurrentPage(slug);
  recordChoice('p1');
  updatePage(currentPage);
    
}



///////////////////////////////////////////////////
//////// Story Data //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Only edit this data to change/enhance the story. Be sure to watch for how  //
// changes to the story data might affect the mechanisms that output the      //
// story.                                                                     //
////////////////////////////////////////////////////////////////////////////////
// NOTE: The data below is organized as a JS Object. The content for each     //
// page is stored using a "slug" -- a short alphanumeric identifier (for      //
// example, "p1", "p2", "homeEnd", etc.). Each page contains a `text`         //
// property and a `choices` property. The `choices` property is an Array that //
// contains all of the choices, including the slug that each choice should    //
// link to.                                                                   //
////////////////////////////////////////////////////////////////////////////////

var storyData = {
    title: "The Hero and the Enemy",
    p1: {
        text: `You are a superhero named ${playerName}. You are flying high above the
                countryside. You see  your secret lair off to the East , 
                and the city of ${cityName} off to the West.  There seems to be smoke 
                coming from the city.`,
        choices: [
            {
                text: `Fly over ${cityName} to the West.`,
                link: 'p2'
            }, {
                text: `Fly back home to your secret lair.`,
                link: 'homeEnd'
            }
        ]
    },
    homeEnd : {
        text: `You return home to your secret lair and
                enjoy a hot cup of tea!
                Spend the next five years coming to terms with deep and 
                abiding guilt that you are, despite your good looks and lovely 
                cape, not the hero this city deserves!
                <br><br>
                The End.`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    },
    p2 : {
        text: `You fly over ${cityName} and see a dumpster fire near the capitol
                building. There are no people around that you can see. The
                dumpster seems to be filled with healthcare bills that actually insure 
                citizens, but you are worried this might be a trap. Is ${enemyName} 
                lurking somewhere you can't see?`,
        choices: [
            {
                text: `Go for the fire extinguisher!`,
                link: 'p3'
            }, {
                text: `Decide it's not worth the risk and fly back to your secret lair.`,
                link: 'homeEnd'
            }
        ]
    },
    p3 : {
        text: `You swoop down and pull the fire extingisher from the wall. Just as you
                grab hold of the fire extinguisher, ${enemyName} leaps onto the street
                ahead of you!`,
        choices: [
            {
                text: `Veer off to the left trying to avoid ${enemyName}.`,
                link: 'basketEnd'
            }, {
                text: `Fly directly at ${enemyName}, full steam ahead!`,
                link: 'p4'
            }
        ]
    },
    basketEnd : {
        text: `You fly directly into a jail cell, which slams shut behind you.
                You are stuck until a new president is elected and order is restored to 
                ${cityName}. But at least you'll have healthcare!
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p4 : {
        text: `You zoom towards ${enemyName}, who is surprised by the direct approach
                and leaps away from the dumpster. You pull up sharply and make it over the
                dumpster spraying it with the fire extinguisher effectively saving the 
                healthcare plans of the most vunerable citizens of ${cityName}. The sun is 
                shining, the wind is beneath your wings, and you have a heart full of
                love.`,
        choices: [
            {
                text: `Take your energy and momentum to tackle the next injustice.`,
                link: 'p5'
            }
        ]
    },
    p5 : {
        text: `You find a secluded fence post in the middle of a large field
                full of wildflowers. You decide this will be a wonderful place
                to start an organic farm that will provide free meals and housing
                to the disavantaged people of ${cityName}.
                <br><br>
                Just as you settle down you see ${enemyName} strolling down the path
                towards your fence post.`,
        choices: [
            {
                text: `Say, "Hello ${enemyName} I know we've had our differences, but
                won't you join me in helping the people of ${cityName}?"`,
                link: 'shareCheese'
            }, {
                text: `Keep a wary eye on ${enemyName}.`,
                link: 'p6'
            }
        ]
    },
    shareCheese : {
        text: `You hop down to the ground and ${enemyName} helps you break ground 
                on the new buildings for the organic farm. He is very grateful to 
                you for moving past that nastiness aout the healthcare fire. 
                He gives you his support in restoring enviromental protections, ensuring
                the health and prosperity of the citizens of ${cityName}.
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p6 : {
        text: `${enemyName} approaches and says, "Hello ${playerName}! It's been so
                long since we've seen each other. I've missed hearing your
                bleeding-heart-liberal whining. Won't tell me again about how we should 
                take care of eachother?`,
        choices: [
            {
                text: `Sing a song for ${enemyName}.`,
                link: 'dropCheeseEnd'
            }, {
                text: `Remain silent.`,
                link: 'p7'
            }
        ]
    },
    dropCheeseEnd : {
        text: `You open your mouth to sing a lovely song, and anger and rage come 
                bubbling forth. ${enemyName} quickly calls you shrill and unwilling 
                to work with him for the greater good of ${cityName} and his base supporters 
                fall for his act and Fox News gobbles it up!
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p7 : {
        text: `You remain silent through all of ${enemyName}'s "flattery". In the end,
                he knows you won't fall for his tricks, and he leaves you alone.
                <br><br>
                Finally able to relax in quiet, you recruit more motivated activists
                building a universal healthcare system, a strong education system, and 
                pass legislation ensuring safety nets are in place to support all the 
                citizens of ${cityName}. Peace and prosperty win the day. What follows
                is the development of the most artistically and technologically advanced 
                city the planet has ever seen. ${cityName} becomes the model of governance
                for all other cities, and you are eventually rendered obsolete. But that's    
                okay because ${cityName} has repaired the social security system, and you
                are able to comfortably retire.
                <br><br>
                The End`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    }
};

///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the game. You should only edit it if you are attempting a //
// stretch goal. Otherwise, this script calls the functions that you have     //
// created above.                                                             //
////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector('#story-title');
title.innerHTML = storyData.title;

let pageContent = document.querySelector('#story-text');
let choicesUL = document.querySelector('#choices');

function updatePage(page) {
    pageContent.innerHTML = page.text;
    choicesUL.innerHTML = '';
    for (choice of page.choices){
        let newLI = document.createElement('li');
        newLI.innerHTML = choice.text;
        newLI.setAttribute('data-slug', choice.link);
        choicesUL.appendChild(newLI);
    }
    addEventListeners();
}

function addEventListeners(){
    let choices = document.querySelectorAll('#choices li');
    for (choice of choices){
        choice.addEventListener('click', function(e){
            console.log(`Moving to page: ${e.target.dataset.slug}`);
            changePage(e.target.dataset.slug);
        })
    }
}

let undo = document.querySelector('#undo');
undo.addEventListener('click', function(e){
    console.log('Undoing last choice.');
    let slug = undoChoice();
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
})

currentPage = storyData.p1;
updatePage(currentPage);

