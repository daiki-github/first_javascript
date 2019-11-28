(function(){
//   エラーチェック
'use strict';
// id input_textのエレメントを取得
var e = document.getElementById('input_text');
// 初期値をセット
document.getElementById('character_count').innerHTML = '10';

// keyupのイベント発生時に、入力文字列をコンソール
e.addEventListener('keyup', function(){
    // console.log(e.value);
    // console.log(e.value.length);

    var str = e.value;
    // 改行の削除
    str = str.replace(/\r?\n/g, '');
    // 文字列の表示
    // console.log(str.length);
    var remaining = 10 - str.length;
    document.getElementById('character_count').innerHTML = remaining;

    if(remaining >= 0){
        document.getElementById('character_count_wrap').style.color = 'black';
    } else {
        document.getElementById('character_count_wrap').style.color = 'red';
    }
  });

})();