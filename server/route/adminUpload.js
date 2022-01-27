//라우터 기본설정
const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");
const sizeOf = require("image-size");

const passport = require("passport");
const admin = require("./admin");
//db 설정
const { mongodburl } = require("../MongodbUrl");
const MongoClient = require("mongodb").MongoClient;

let db;

router.use(passport.initialize());
admin().passport();
// router.use('/:page')
// router.use("/:page", admin().authenticateAccessToken);

MongoClient.connect(mongodburl, (error, client) => {
    if (error) return console.log("에러", error);

    db = client.db("DENOVO");
});

// multer 설정
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./uploads/${req.params.page}`);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },

    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" || ext !== ".jpg") {
            return cb(res.status(400).end("only png, jpg are allowed"), false);
        }
        cb(null, true);
    },
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

//api
router.post("/:page",upload.single('u'), (req, res) => {
    console.log(req.body);
    console.log("==================================================================================UPLOAD==================================================================================");
    // console.log(`./uploads/${req.params.page}`, req.user.name);
    console.log("==================================================================================BODY==================================================================================");
    console.log(req.body);

    console.log("==========================================================================================================================================================================");
    if (req.file) {
      console.log(req.file)
      console.log('req.file')
        let newBody = req.body;
        newBody["imgUrl"] = req.file.path;

        newBody["imgName"] = req.file.filename;

        newBody["imgRatio"] = sizeOf(req.file.path).width / sizeOf(req.file.path).height;
        newBody["writer"] = req.user.name;
        console.log("writer", req.user.name);
        // db.collection("counter").findOne({ name: `${req.params.page}Count` }, (error, result) => {
        //   let Count = result.count;

        //   newBody["_id"] = Count + 1;
        //   db.collection(req.params.page).insertOne(newBody, (error, result) => {
        //     if (error) {
        //       console.log("error:", error);
        //     }
        //     console.log(result);
        //     db.collection("counter").updateOne({ name: `${req.params.page}Count` }, { $inc: { count: 1 } }, (error, result) => {
        //       if (error) {
        //         return console.log(err);
        //       }
        //       res.send(`add ${req.params.page}`);
        //     });
        //   });
        // });
        try {
            sharp(req.file.path) //
                .resize({ height: 1000 })
                .withMetadata()
                .toBuffer((error, buffer) => {
                    if (error) throw error;
                    fs.writeFile(req.file.path, buffer, (error) => {
                        if (error) throw error;
                    });
                });
        } catch (error) {
            console.log(error);
        }
    } else {
        //not img
        let newBody = req.body;
        // console.log(req.params.page)

        // console.log(newBody)
        // db.collection("counter").findOne({ name: `${req.params.page}Count` }, (error, result) => {
        //     // console.log(result)
        //     let Count = result.count;
        //     let date = new Date();
        //     var year = date.getFullYear();
        //     var month = ("0" + (1 + date.getMonth())).slice(-2);
        //     var day = ("0" + date.getDate()).slice(-2);

        //     newBody["_id"] = Count + 1;
        //     newBody["writer"] = req.user.name;
        //     newBody["writeDate"] = year + "-" + month + "-" + day;
        //     console.log("writer", req.user.name);
        //     db.collection(req.params.page).insertOne(newBody, (error, result) => {
        //         if (error) {
        //             console.log("error:", error);
        //         }
        //         console.log(result);
        //         db.collection("counter").updateOne({ name: `${req.params.page}Count` }, { $inc: { count: 1 } }, (error, result) => {
        //             if (error) {
        //                 return console.log(err);
        //             }
        //             res.send(`add ${req.params.page}`);
        //         });
        //     });
        // });
    }
});

module.exports = router;
