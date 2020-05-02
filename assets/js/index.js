"use strict";

// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET','https://ghapi.huchen.dev/repositories',true);

// レスポンスをjson形式で吐き出し
request.responseType = 'json';

// レスポンスが返ってきたときの処理
request.onload = function() {
    var data = this.response;
    // console.log(data);
    // document.write(JSON.stringify(data));
    
    // 2個だけデータを取得する
    for (var i = 0; i < 2; i++) {
        document.write(JSON.stringify(data[i]));
    }
}



// var element = document.getElementById

// request.onreadystatechange = function() {
//     if(this.readyState === 4) {
//         console.log('Status:', this.status);
//         console.log('Headers:', this.getAllResponseHeaders());
        // console.log('Body:',this.responseText);
    // }
// };

// リクエストをURLに送信
request.send();