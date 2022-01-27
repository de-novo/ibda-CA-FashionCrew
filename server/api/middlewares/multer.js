import multer from "multer";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, `./uploads/${req.params.page}`);
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
        const ext = path.extname(file.originalname);
        if (ext !== ".png" || ext !== ".jpg") {
            return cb(res.status(400).end("only png, jpg are allowed"), false);
        }
        cb(null, true);
    },
});

let upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});


export { upload };
