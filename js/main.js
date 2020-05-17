"use strict";

const screen = document.getElementById("screen"); // ディスプレイ（id="screen"）の値

let display = ""; // ディスプレイに表示させる変数
let defaultNum = 0; // 初期値
let total = 0; // 計算した合計を入れる変数

let op = ""; //　演算子を保存する変数
let saveNum = ""; // 最初に記入した数字を一旦保存する変数

// ディスプレイに初期値を表示
screen.textContent = defaultNum;

// 数字ボタンが押される
let btnNum = (btnVal) => {
  // コンピュータが押されたボタンの値を受け取る
  display = display + btnVal.value;
  // id="screen"に値を表示
  screen.textContent = display; // 結果をディスプレイ部分に表示する

  if (display.length > 15) {
    // 15文字以上で文字を小さくする
    screen.classList.add("small");
  }
};

// 演算子ボタンの処理
let btn_operator = (opVal) => {
  op = opVal; // opへ演算子ボタンの値を格納
  saveNum = display; // 最初に入力した値を一時退避
  display = ""; // ディスプレイの値を一旦削除

  if (op === "%") {
    display = new Function(`return (${saveNum}/100);`)(); // %の計算を実行
    screen.textContent = display; // 結果をディスプレイ部分に表示する
  } else if (op === "+/-") {
    display = new Function(`return (-1 * ${saveNum});`)(); // -の付けるor付けない
    screen.textContent = display; // 結果をディスプレイ部分に表示する
  }
};

// = を押下後に計算を実行しディスプレイに表示
let btn_equal = () => {
  total = new Function(`return (${saveNum}${op}${display});`)(); // +-×÷の計算を実行
  display = total;
  screen.textContent = display; // 結果をディスプレイ部分に表示する
};

// ACボタン押下でディスプレイの値を初期値0に戻す
const btn_clear = () => {
  saveNum = "0"; // 一時退避した値を0にする
  total = "0"; // 合計値を0にする
  op = ""; // 演算子を削除
  display = ""; // ディスプレイに表示した値を削除
  screen.textContent = defaultNum; // 初期値に戻す
};
