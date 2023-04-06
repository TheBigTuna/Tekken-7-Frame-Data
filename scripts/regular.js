let characterArray = [];
let gifArray = [];

let sourceJs ={

scriptsJs: () => {

    scriptsName = ["akuma", "alisa", "asuka", "bob", "bryan",
         "claudio", "devil-jin", "dragunov", "eliza",
          "heihachi", "hwoarang", "jack-7", "jin", 
         "josie", "katarina", "kazumi", "kazuya", "king", "lars", 
         "law", "lee", "leo", "lili", "ling", "lucky-chloe", "master-raven", 
         "miguel", "nina", "paul", "shaheen", "steve", "yoshimitsu"];
    for (let i = 0; i < scriptsName.length; i++){ 

    let scriptElem = document.createElement("script");
    scriptElem.setAttribute("src", "character-data/" + scriptsName[i] + ".js");
    document.getElementsByTagName("head")[0].appendChild(scriptElem);
    
};
},

charList: () => {
        let char = [akuma, alisa, asuka, bob, bryan,
         claudio, devilJin, dragunov, eliza,
          heihachi, hwoarang, jack7, jin, 
         josie, katarina, kazumi, kazuya, king, lars, 
         law, lee, leo, lili, ling, luckyChloe, masterRaven, 
         miguel, nina, paul, shaheen, steve, yoshimitsu]; 

         characterArray.push(char);

    let charDetails = char.map((list) => {
        let name = list.metadata.name;
        let game = list.metadata.game;
        let moves = list.moves;
        let character = list.metadata.character;
        let gifs = list.gifs;
        
    //        if(list.gifs == undefined){
    //            let noGif = {name : name, game : game, moves: moves, character: character, gifs : "Not Available"};
    //          return noGif;
    //  }  

        return {

            name: name,
            game: game,
            moves: moves,
            character: character,
            gifs: gifs,
            char: char
            
        } 
        });
                         
        for (i = 0; i < charDetails.length; i++) {
            // Entire Char List
             let charText = charDetails[i].character;
             let charRep = charText.replace(/-/g, " ");

             $("#appList").append("<div id = " + charDetails[i].character + " class = 'appChar off char"+ [i] + " list-group-item' value = " + [i] + ">" + "<h4>" + charRep + "</h4>" + "</div>");
             $('#appList').append("<ul class = 'objList' value = " + [i] + "></ul>");
             $('#appList').append("<li class = 'charMoves list-group-item' value = " + [i] + ">Moves</li>");
             $('#appList').append("<li class = 'charGifs list-group-item' value = " + [i] + ">Gifs</li>");
             characterArray.push(charDetails[i]);
             
        }

         displayMoves = (b,c) => {
             $(document).find('.body-box' + c).append('<table class = charTable' + c +'><tbody class="notation"></tbody><tbody class="hit-level"></tbody><tbody class="damage"></tbody><tbody class="on-block"></tbody><tbody class="on-hit"></tbody></tbody><tbody class="on-ch"></tbody></table>');
             for(a = 0; a < b.moves.length; a++){
                // $(document).find('.body-box' + c).append("<p class='notation'>" + b.moves[a].notation + "</p>");
                // $(document).find('.body-box' + c).append("<p class='hit-level'>" + b.moves[a].hit_level + "</p>");
                // $(document).find('.body-box' + c).append("<p class='damage'>" + b.moves[a].damage + "</p>");
                // $(document).find('.body-box' + c).append("<p class='on-block'>" + b.moves[a].on_block + "</p>");
                // $(document).find('.body-box' + c).append("<p class='on-hit'>" + b.moves[a].on_hit + "</p>");
                // $(document).find('.body-box' + c).append("<p class='on-ch'>" + b.moves[a].on_ch + "</p>");'
                   $(document).find('.notation').append('<tr><td>' + b.moves[a].notation + '</td></tr>');
                   $(document).find('.hit-level').append('<tr><td>' + b.moves[a].hit_level + '</td></tr>');
                   $(document).find('.damage').append('<tr><td>' + b.moves[a].damage + '</td></tr>');
                   $(document).find('.on-block').append('<tr><td>' + b.moves[a].on_block + '</td></tr>');
                   $(document).find('.on-hit').append('<tr><td>' + b.moves[a].on_hit + '</td></tr>');
                   $(document).find('.on-ch').append('<tr><td>' + b.moves[a].on_ch + '</td></tr>');
             
            
             }
                $(document).find('.header-box' + c).append("<h4>" + b.metadata.name + "</h4>");
        }

        displayGifs = (e,f) =>{
            
            $(document).find('.header-box' + [f]).append("<p>" + e.metadata.name + "</p>");

         for (let g in charDetails[f].gifs) {
                
                    $(document).find('.body-box' + f).append("<div class='gifBtn' id = "+ charDetails[f].gifs[g] +" >" + "<button>" + g + "</button>" + "</div>");
                    gifArray.push(g.length);
        }
           $(document).find('.body-box' + f).append("<div class ='gifContainer'></div>");
           $('.gifBtn').on('click',function (){
               $('.gifContainer').css("background-image", "url(" + this.id + ")");  
                   $('.modal-box').animate({   
                        scrollTop: 0
                    }, 900);
               });
        };      

},
    load: () => {
            $("#loading").fadeOut(500);
            $("#home").fadeIn(250);
    },

    homeClick: () => {
        let home = document.getElementById('home');
        let app = document.getElementById('app');
        let headerBtn = document.getElementById('headerBtn');
        window.location = "file:///C:/Users/Preferred%20Customer/Documents/code/T7-frame-data/frames.html";
        // window.location = "http://octaviusmoore.com/project2/frames.html"

},  
    prevClick: () => {
        let home = document.getElementById('home');
        let app = document.getElementById('app');
        let prevBtn = document.getElementById('prevBtn');
        window.location = "file:///C:/Users/Preferred%20Customer/Documents/code/T7-frame-data/index.html";
        // window.location = "http://octaviusmoore.com/project2/index.html"

    },
    ui: () => {

                let charHeadValue;
                let charBodyValue;

             $('.charMoves').click(function (){
                    charHeadValue = this.value;
                    charBodyValue = this.value;
                    $('.modal-background').css('display', 'block');
                    $('.modal-header').addClass("header-box" + this.value);
                    $('.modal-body').addClass("body-box" + this.value);
                    displayMoves(characterArray[0][this.value],this.value);
                   

             });

              $('.charGifs').click(function (){
                    charHeadValue = this.value;
                    charBodyValue = this.value;
                    $('.modal-background').css('display', 'block');
                    $('.modal-header').addClass("header-box" + this.value);
                    $('.modal-body').addClass("body-box" + this.value);
                    displayGifs(characterArray[0][this.value],this.value);
             });
             
                $('.modal-close').click(function (){                
                    $('.modal-background').css('display', 'none');
                    $('.modal-header').removeClass("header-box" + charHeadValue);
                    $('.modal-header p').remove();
                    $('.modal-body').removeClass("body-box" + charBodyValue);
                    $('.modal-body p').remove();
                    $('.modal-body div').remove();
                    $('.modal-body table').remove();
                    gifArray = [];
             });
             
    },
    
    scroll: () => {
            $(document).on('scroll',function(){
                let pos = $(window).scrollTop();
                if(pos > 120){
                    $('.scroll').css('display', 'block');
                }
                else{
                    $('.scroll').css('display', 'none');
                }
            });

                $('.scroll').click(function(){
                $('html, body').animate({   
                        scrollTop: 0
                    }, 900);
                });
    },

init: () => {
       sourceJs.scriptsJs();
       setTimeout( ()  => { sourceJs.charList();}, 2700);
       setTimeout( ()  => { sourceJs.ui();}, 2900);
       sourceJs.scroll();
},
};