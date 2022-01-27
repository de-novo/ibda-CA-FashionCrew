import mongoose from "mongoose";

const writerSchema = mongoose.Schema({
    _id: Number,
    name: String,
});
const projectSchema = mongoose.Schema(
    {
        _id: Number,
        date: Date, //작성
        start: Date,
        end: Date,
        color: String,
        imgUrl: String,
        imgName: String,
        imgRatio: Number,
        writer: writerSchema,
    },
    { collection: "project" }
);
//  { collection: 'project' }
const Project = mongoose.model("Project", projectSchema);
export { Project };
/*{
  fieldname: 'img',
  originalname: '캡처.PNG',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: './upload/project',
  filename: '1643015617022_캡처.PNG',
  path: 'upload\\project\\1643015617022_캡처.PNG',
  size: 28346
} */