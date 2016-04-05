var dictionary = ["achievement","acid","action","adventure","allspark","ammo","arpg","assassin","asteroid","autosave","avatar","avenger","beta","blade","blast","block","blood","boss","buff","bullet","buster","checkpoint","cheese","chrono","claptrap","class","closed","console","controller","cooldown","corruption","counter","cover","cpu","crafting","creed","crouch","crpg","cutscene","cutting","damage","difficulty","dig","dlc","dodge","doublejump","drm","dungeon","dweller","early","edge","emergent","endings","episodic","escort","esports","event","exclusive","exploit","explosion","fall","farm","farming","fasttravel","field","fight","finished","fireball","fog","free","game","ganon","gauntlet","gem","generation","ghost","god","gpu","grenade","griefer","grinding","gun","halo","hardmode","healer","health","horror","ifrit","indie","infinity","instance","invader","joystick","jrpg","jump","keyblade","keyboard","kill","lag","lane","leroy","level","lightning","link","live","ludology","mage","magus","mana","mario","masamune","master","matchmaking","materia","megaman","microtransactions","middleware","midgar","mission","mmorpg","mob","moba","mode","monster","mouse","mouselook","multiple","myst","nerf","nintendo","noob","npc","nvidia","openworld","optimus","overpowered","overshield","pacman","pass","pellet","permadeath","persistent","pickaxe","pierce","pixel","plasma","play","poison","port","potion","procedural","puzzle","pve","pvp","quest","quick","raid","realtime","replay","retrogaming","rig","rocket","roguelike","romance","rpg","season","shield","shoot","shovel","simulator","sli","sliding","smash","souls","spawn","speedrun","spread","sprint","stealth","strategy","streak","summon","super","survival","sword","system","tactics","tank","tesseract","theory","time","touchscreen","triforce","uppercut","vault","walljump","war","warrior","wasd","wasteland","world","zelda","zombie"]
// var dictionary = ["beta","noob","blade","blood","blast","world","zelda","zombie"]
var letterScore = {
  a:1,
  b:3,
  c:3,
  d:2,
  e:1,
  f:4,
  g:2,
  h:4,
  i:1,
  j:8,
  k:5,
  l:1,
  m:3,
  n:1,
  o:1,
  p:3,
  q:10,
  r:1,
  s:1,
  t:1,
  u:1,
  v:4,
  w:4,
  x:8,
  y:4,
  z:10
}

var lettersEntered = null;
$("#submit").on("click", function(){
  lettersEntered = $('#letterbox textarea').val()
  getPossibleWords(lettersEntered)
  getBestWord(possibleWords)
})

var possibleWords = []
var getPossibleWords = function(lettersEntered){
  possibleWords = []
  var wordArr = lettersEntered.split('');
  for(k=0; k<dictionary.length;k++){
    for (m=0; m<dictionary[k].length;m++) {
      if (wordArr.indexOf(dictionary[k][m]) < 0) {
        break;
      }
      if (m + 1 === dictionary[k].length ) {
        possibleWords.push(dictionary[k])
      }
    }
  }
  $('#possiblewords span').html(possibleWords.join(", "))
}

var getBestWord = function(possibleWords){
  console.log(possibleWords)
  var currentBestWord = ""
  var scoreToBeat = 0;
  for (i=0;i<possibleWords.length;i++){
  var currentScore = 0;
    for (m=0;m<possibleWords[i].length;m++){
      currentScore+=letterScore[possibleWords[i][m]]
    }
    if (currentScore > scoreToBeat){
      scoreToBeat = currentScore;
      currentBestWord = possibleWords[i];
    };
  }
  console.log(currentBestWord)
  $('#bestword span').html(currentBestWord)
}
