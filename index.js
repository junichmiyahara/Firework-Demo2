// var options = {
//   opacity: 0.1,//花火が消えるまでの長さ
//   acceleration: 1.02,//花火が上がる速度
//   gravity: 1.5,//花火が上がってから消えるまでの時間
//   // traceLength: 1,//打ち上がるまでの直線
//   traceSpeed: 0.1,//打ち上がるまでの長さ
//   particles: 100,
//   explosion: 15,//爆発の長さ？
//   intensity: 10,//花火の上がる頻度
//   flickering: 50,
//   // lineStyle: 'round',
//   hue: {
//     min: 0,
//     max: 360
//   },
//   lineWidth: {
//     explosion: {//花火が爆発した時の太さ
//       min: 1,
//       max: 5
//     },
//     trace: {//花火の発射する種の太さ
//       min: 1,
//       max: 5
//     }
//   },
//   rocketsPoint: {//発射地点
//     min: 50,
//     max: 50
//   },
//   mouse: {
//     click: false,
//     // move: true, //マウスカーソルに追従する
//     // max: 3
//   },
//   brightness: {//花火の輝き
//     min: 80,
//     max: 100
//   },
// }
// window.onload = function () {
//   const body_container = document.getElementById("body_container")

//   // 花火のインスタンス生成
//   // MEMO::ここを消すと再生ボタンが反応しなくなる
//   // でも条件内でfireworksを指定しているのに、何故だろう（多分これがヒントになっている）メソッドの中の変数はメソッド内でしか使えないから



//   var num = 0;//フラグ用

//   // ここに読み込み完了時に実行してほしい内容を書く。
//   const btn = document.getElementById("btn-play");
//   const music = document.getElementById("Music");
//   // MEMO::56秒でサビに入るからそこで花火を一気に出す
//   // music.currentTime//現在再生中の時間を取得
//   // 常に再生時間を取得して処理する
//   music.addEventListener("timeupdate", () => {
//     if (5 < music.currentTime && music.currentTime < 75) {
//       num = ++num;//何回この処理を通っているかをカウント

//       console.log(num);
//       // MEMO::初回のみ実行(じゃなきゃ重くなる)
//       if (num === 1) {
//         options = {
//           opacity: 0.1,//花火が消えるまでの長さ
//           acceleration: 1.52,//花火が上がる速度
//           gravity: 1.5,//花火が上がってから消えるまでの時間
//           // traceLength: 1,//打ち上がるまでの直線
//           traceSpeed: 0.1,//打ち上がるまでの長さ
//           particles: 100,
//           explosion: 15,//爆発の長さ？
//           intensity: 50,//花火の上がる頻度
//           flickering: 50,
//           // lineStyle: 'round',
//           hue: {
//             min: 0,
//             max: 360
//           },
//           lineWidth: {
//             explosion: {//花火が爆発した時の太さ
//               min: 1,
//               max: 5
//             },
//             trace: {//花火の発射する種の太さ
//               min: 1,
//               max: 5
//             }
//           },
//           rocketsPoint: {//発射地点
//             min: 50,
//             max: 50
//           },
//           mouse: {
//             click: false,
//             // move: true, //マウスカーソルに追従する
//             // max: 3
//           },
//           brightness: {//花火の輝き
//             min: 80,
//             max: 100
//           },
//         }
//         console.log(options)
//         console.log("ここの処理は一度だけ通る")

//         // 花火スタート
//         console.log("ここまで処理通っているか？")
//         console.log(fireworks)
//       }

//     }
//   });

//   // 再生ボタンの処理
//   // MEMO::関数の中で変数宣言しても他の関数の中では使えない
//   // MEMO::引数としてメソッドに渡す
//   btn.addEventListener("click", () => {
//     if (!music.paused) {
//       // MEMO::なぜかこの中の中でfireworksの値が上書きしたのが消えている
//       console.log(fireworks)
//       // 再生中の時
//       btn.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に切り替え
//       music.pause();//音楽を停止
//       // 花火一時停止
//       fireworks.pause();
//     }
//     else {
//       // 停止中の時
//       btn.innerHTML = '<i class="fas fa-pause"></i>';  // 「一時停止ボタン」に切り替え
//       music.play();
//       // 花火スタート
//       fireworks.start();
//     }

//   });

//   /**
//    * [event] 再生終了時に実行
//    */
//   music.addEventListener("ended", () => {
//     btn.innerHTML = '<i class="fas fa-play"></i>';  // 「再生ボタン」に変更
//   })

// };
