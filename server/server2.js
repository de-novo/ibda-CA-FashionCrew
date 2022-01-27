// 기본설정값
// 변수설정
const { mongodburl } = require("./MongodbUrl");
const port = 4000;

const exp = require("constants");
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const { hasSubscribers } = require("diagnostics_channel");

//라우터
const router = require("./route/index");
const { send, title } = require("process");

//express
const app = express();
const http = require("http").createServer(app);

//미들웨어설정
app.use("./uploads", express.static("uploads"));
app.use(express.json({ limit: "50mb" }));
app.use(
    express.urlencoded({
        limit: "50mb",
        extended: false,
        parameterLimit: 1000000,
    })
);
app.use("/admin/project", (req, res) => {
    res.json({ username: "박준혁" });
});

//db설정
let db;
MongoClient.connect(mongodburl, (error, client) => {
    if (error) return console.log("에러", error);

    db = client.db("DENOVO");

    http.listen(port, () => {
        console.log(`listening on ${port}`);
        console.log("MongoDB connected");
    });
});

app.use("/api", router);

//사진내보내기 실험
app.use("/uploads", express.static("uploads"));

app.get("/api", (req, res, next) => {
    db.collection("member")
        .find()
        .toArray((error, result) => {
            req.body.member = result.map((item) => {
                item.REFRESH_TOKEN = 0;
                return item;
            });

            // res.send(req.body)
            next();
        });
});
app.get("/api", (req, res, next) => {
    db.collection("project")
        .find()
        .toArray((error, result) => {
            req.body.project = result;

            // res.send(req.body)
            next();
        });
});
app.get("/api", (req, res, next) => {
    db.collection("content")
        .find()
        .toArray((error, result) => {
            req.body.content = result;

            // res.send(req.body)
            next();
        });
});
app.get("/api", (req, res) => {
    db.collection("photo")
        .find()
        .toArray((error, result) => {
            req.body.photo = result;
            console.log("db - client 보내기 완료");
            res.send(req.body);
        });
});


//getPhotoByProjectId 필요
//getPhotoByUserId 필요
app.get("/api/project", (req, res) => {
  
  console.log(req.query.id)
    res.send("gdgd");

});
