
  // Tek tek her idyi çekmek yerine tüm  idleri tek fonksiyonda topladım.
    function playAudio(id) {
      //document.getElementById(id).currentTime = 0; bu kendi kendime düşünürken eklediğim bir özellik üst üste basınca notaların delaysız çalmasını sağlıyor.
      document.getElementById(id).play();

    }

  //Tek tek her keye fonksiyon yazmak yerine keyleri bir mape toplayıp fonksiyonu daha okunabilir ve pratik hale getirdim.
  const keySounds = {
    'KeyA': 'a',
    'KeyW': 'w',
    'KeyS': 's',
    'KeyE': 'e',
    'KeyD': 'd',
    'KeyF': 'f',
    'KeyT': 't',
    'KeyG': 'g',
    'KeyY': 'y',
    'KeyH': 'h',
    'KeyU': 'u',
    'KeyJ': 'j',
    'KeyK': 'k',
    'KeyO': 'o',
    'KeyL': 'l',
    'KeyP': 'p',
    'KeyM': 'm'

  }
  //Burası keydown ile tuşa basma olayını izleyip ona göre note fonksiyonun çalıştırmamızı ve sesi vermemizi sağlıyor.
  document.addEventListener('keydown', note);
  function note(e){
    if (keySounds[e.code]){
        playAudio(keySounds[e.code])
    }
  }
//Eğer başka bir tuşa basılır ise ya da aynı notaya tekrar basılırsa notanın tekrar çalmasını nasıl sağlayabiliriz?
// Audio.timer gibi bir değişken olmalı bunun çektiğimiz wav dosyalarından çekmeliyiz
//o o değişkeni kısaltıp ya da yeni bir eventListener ekleyip yeni bir nota  basıldığında sıfırlamalıyız.



/*

document.addEventListener('keydown', note);
function playA() {
  document.getElementById('a').play();
}
function playW() {
  document.getElementById('s').play();
}
function playE() {
  document.getElementById('e').play();
}
function playD() {
  document.getElementById('d').play();
}
function playF() {
  document.getElementById('f').play();
}
function playT() {
  document.getElementById('t').play();
}
function playG() {
  document.getElementById('g').play();
}
function playY() {
  document.getElementById('y').play();
}
function playH() {
  document.getElementById('h').play();
}
function playU() {
  document.getElementById('u').play();
}
function playJ() {
  document.getElementById('j').play();
}
function playK() {
  document.getElementById('k').play();
}
function playO() {
  document.getElementById('o').play();
}
function playL() {
  document.getElementById('l').play();
}
function playP() {
  document.getElementById('l').play();
}
function playM() {
  document.getElementById('m').play();
}

/*
function note(e)



function note(e){
  if (e.code === 'KeyA') {
    playA();
  } else if (e.code === 'KeyW') {
    playW();
  } else if (e.code === 'KeyS') {
    playS();
  } else if (e.code === 'KeyD') {
    playD();
  } else if (e.code === 'KeyE') {
    playE();
  } else if (e.code === 'KeyF') {
    playF();
  } else if (e.code === 'KeyT') {
    playT();
  } else if (e.code === 'KeyG') {
    playG();
  } else if (e.code === 'KeyY') {
    playY();
  } else if (e.code === 'KeyH') {
    playH();
  } else if (e.code === 'KeyU') {
    playU();
  } else if (e.code === 'KeyK') {
    playK();
  } else if (e.code === 'KeyO') {
    playO();
  } else if (e.code === 'KeyL') {
    playL();
  } else if (e.code === 'KeyP') {
    playP();
  } else if (e.code === 'KeyM') {
    playM();
  }


}
*/
