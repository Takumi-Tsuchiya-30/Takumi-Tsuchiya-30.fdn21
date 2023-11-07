'use strict';

//クイズを格納する為の配列の準備[クイズ,正解番号]
let quiz = [
  ['熊本城を築いたのは加藤清正である', 1],
  ['光の森という町名は存在しない', 2],
  ['お弁当といえばヒライである', 1],
  ['日本初のスクランブル交差点は渋谷ではなく熊本だ', 1],
  ['熊本には3333段の石段がある', 1],
];

//問題数が入る変数の用意　掛け算ではないので0を用意
let count = 0;
//正解数が入る変数の用意　掛け算ではないので0を用意
let correctNumber = 0;

document.addEventListener('DOMContentLoaded', function () {
  //最初の問題を表示
  //変数を定義　quesutionのidを取得
  let question = document.getElementById('question');
  //現在の問題数をinnerHTMLで取得し、現状のcountに⁺1し配列内の0番目[問題文]を表示
  question.innerHTML = count + 1 + '問目 :  ' + quiz[count][0];
});

//クリック時の答え判定
//HTML側のonclickがされたら動く
//HTML側の()内の数字を判定しquiz配列内の一番目の数字と厳密に一致するならcorrectNumber(正解数)を足していく
function hantei(btn) {
  if (quiz[count][1] === btn) {
    correctNumber++;
  }

  //問題数に対して‐1をしてquizの長さを取得（問題数が変化した際に対応する為）
  let quizLength = quiz.length - 1;
  // console.log(quiz.length-1);
  //正解数を表示　areatを使用しポップUP表示
  //if文を使用し現在countが保持している数字と厳密に一致する場合はアラートを表示
  if (count === quizLength) {
    alert('あなたの正解数は' + correctNumber + '問です‼');
  }

  //次の問題を表示
  count++;
  let question = document.getElementById('question');
  question.innerHTML = count + 1 + '問目: ' + quiz[count][0];
}
