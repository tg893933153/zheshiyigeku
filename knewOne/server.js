var express = require('express');
var fs = require('fs');
var app = express();

// app.get("/index.html", function (req, res) {
//     // 通过fs读取文件内容
//     fs.readFile("index.html", "utf-8", function (err, data) {
//
//         // 通过res将内容写入页面
//         res.send(data);
//     });
// });
// app.get("/sjyybfq.html", function (req, res) {
//     // 通过fs读取文件内容
//     fs.readFile("sjyybfq.html", "utf-8", function (err, data) {
//
//         // 通过res将内容写入页面
//         res.send(data);
//     });
// });
//
// app.get("/jquery-2.2.3.js", function (req, res) {
//     // 通过fs读取文件内容
//     fs.readFile("jquery-2.2.3.js", "utf-8", function (err, data) {
//
//         // 通过res将内容写入页面
//         res.send(data);
//     });
// });
// app.get("/music.json", function (req, res) {
//     // 通过fs读取文件内容
//     fs.readFile("music.json", "utf-8", function (err, data) {
//
//         // 通过res将内容写入页面
//         res.send(data);
//     });
// });

app.get("*", function (req, res) {
    res.sendFile(__dirname + req.path);
});

// app.get("*", function (req, res) {
//
//     var path = "/Users/lidaze/Desktop/考试/www" + req.path;
//
//     fs.readFile(path, "utf-8", function (err, data) {
//         if (err) {
//             res.sendFile("/Users/lidaze/Desktop/考试/www/404.html");
//         } else {
//             res.sendFile(path);
//         }
//     });


app.listen(8888, 'localhost', function () {
    console.log("服务器启动成功");
});
