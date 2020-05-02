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
    console.log(data);
}


// request.onreadystatechange = function() {
//     if(this.readyState === 4) {
//         console.log('Status:', this.status);
//         console.log('Headers:', this.getAllResponseHeaders());
        // console.log('Body:',this.responseText);
    // }
// };

// リクエストをURLに送信
request.send();