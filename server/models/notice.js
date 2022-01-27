import mongoose from "mongoose";
const writerSchema = mongoose.Schema({
    _id: Number,
    name: String,
});
const noticeSchema = mongoose.Schema(
    {
        _id: Number,
        title: String,
        content: String,

        writer: writerSchema,
        date: Date,
        // views: Number,
    },
    { collection: "notice" }
);

const Notice = mongoose.model("Notice", noticeSchema);

export { Notice };
