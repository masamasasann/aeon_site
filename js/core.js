// スクロールで動く設定
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
   // 画面内に入ったらfadeInというクラス名を追記
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeDown');
    // 画面内に入ったらfadeDownというクラス名を追記
    }else{
    $(this).removeClass('fadeDown');
     // 画面外に出たらfadeDownというクラス名を外す
     }
  });

}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// nav ゆっくり
// $(finction)() {}
// $('div').fadeIn(700);


// nav open-close
const bodyObj = document.querySelector("body");
const htmlObj = document.querySelector("html");
function navToggle() {
  const navObj = document.getElementsByClassName("nav");
  const headerObj = document.getElementsByClassName("header");
  const btnObj = document.getElementById("nav-button");
  let wh = window.innerHeight;
  let hh = headerObj[0].clientHeight;
  navObj[0].classList.toggle("open");
  btnObj.classList.toggle("open");
  headerObj[0].classList.toggle("open");
  //setFillHeight();
  if ( btnObj.classList.contains("open") == true ) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    bodyObj.classList.add("open");
    htmlObj.classList.add("open");
  } else {
    let scrollPos = bodyObj.dataset.top;
    bodyObj.classList.remove("open");
    htmlObj.classList.remove("open");
  }
}

// modal open-close
function modalOpen(id) {
  let wh = window.innerHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const modalContentElmAll = document.querySelectorAll(".modal__content");
  const modalElmAll = document.querySelectorAll(".modal");
  for(let i = 0; i < modalElmAll.length; i++) {
    modalContentElmAll[i].scrollTop = 0;
    modalElmAll[i].classList.remove("open");
  }
  const targetElm = document.getElementById(id);
  targetElm.classList.add("open");
  bodyObj.classList.add("open");
  htmlObj.classList.add("open");
}
function modalClose() {
  let scrollPos = document.querySelector('body').dataset.top;
  const modalContentElmAll = document.querySelectorAll(".modal__content");
  const modalElmAll = document.querySelectorAll(".modal");
  for(let i = 0; i < modalElmAll.length; i++) {
    modalContentElmAll[i].scrollTop = 0;
    modalElmAll[i].classList.remove("open");
    /*modalElmAll[i].style.height = "";*/
  }
  bodyObj.classList.remove("open");
  htmlObj.classList.remove("open");
}
const modalBgElmAll = document.querySelectorAll(".modal-bg");
for(let i = 0; i < modalBgElmAll.length; i++) {
  modalBgElmAll[i].addEventListener('click',function(){
    const modalElm = modalBgElmAll[i].parentNode;
    modalElm.classList.remove("open");
  });
}
const modalCloseElmAll = document.querySelectorAll(".modal__close");
for(let i = 0; i < modalCloseElmAll.length; i++) {
  modalCloseElmAll[i].addEventListener('click',function(){
    const modalElm = modalCloseElmAll[i].closest("section.modal");//IE？
    modalElm.classList.remove("open");
  });
}

// ハンバーガー
$(".openbtn2").click(function () {
  $(this).toggleClass('active');
});

// バツボタンで閉じる
$(function(){
  $('.square_btn').on('click',function(){
    $('.p-cookie-policy').addClass('hidden');
  });
});

// ホバーしたら線がでて消えて現れる
$(function() {
  //マウスを乗せたら発動
  $('.workstyle__block').mouseover(function() {
    $('.underlineA').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA').show();
  });
});

// ホバーしたら線がでて消えて現れる
$(function() {
  //マウスを乗せたら発動
  $('.workstyle__block2').mouseover(function() {
    $('.underlineA2').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA2').show();
  });
});



// ホバーしたら線がでて消えて現れるenvironment
$(function() {
  //マウスを乗せたら発動
  $('.environment__block').mouseover(function() {
    $('.underlineA-2').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA-2').show();
  });
});

// ホバーしたら線がでて消えて現れるenvironment
$(function() {
  //マウスを乗せたら発動
  $('.environment__block-2').mouseover(function() {
    $('.underlineA-3').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA-3').show();
  });
});

// ホバーしたら線がでて消えて現れるmessage
$(function() {
  //マウスを乗せたら発動
  $('.link__block').mouseover(function() {
    $('.underlineA-4').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA-4').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.link__block2').mouseover(function() {
    $('.underlineA-5').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underlineA-5').show();
  });
});


$(function() {
  //マウスを乗せたら発動
  $('.info__block').mouseover(function() {
    $('.underline.-white').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.info__block2').mouseover(function() {
    $('.underline.-white2').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white2').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.about__nav-1').mouseover(function() {
    $('.underline.-white3').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white3').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.about__nav-2').mouseover(function() {
    $('.underline.-white4').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white4').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.about__nav-3').mouseover(function() {
    $('.underline.-white5').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white5').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.about__nav-4').mouseover(function() {
    $('.underline.-white6').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-white6').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.footer__nav-1').mouseover(function() {
    $('.underline.-lightblue1').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-lightblue1').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.footer__nav-2').mouseover(function() {
    $('.underline.-lightblue2').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-lightblue2').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_1').mouseover(function() {
    $('.underline.-whitey1').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey1').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_2').mouseover(function() {
    $('.underline.-whitey2').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey2').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_3').mouseover(function() {
    $('.underline.-whitey3').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey3').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_4').mouseover(function() {
    $('.underline.-whitey4').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey4').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_5').mouseover(function() {
    $('.underline.-whitey5').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey5').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_6').mouseover(function() {
    $('.underline.-whitey6').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey6').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_7').mouseover(function() {
    $('.underline.-whitey7').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey7').show();
  });
});

$(function() {
  //マウスを乗せたら発動
  $('.navhum_8').mouseover(function() {
    $('.underline.-whitey8').hide();
 // 要素にマウスを載せたときの処理
  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {
    //アニメーションしながらテキストサイズが元のサイズに戻る
      $('.underline.-whitey8').show();
  });
});