import mongoose from "mongoose";
const writerSchema = mongoose.Schema({
    _id: Number,
    name: String,
});
const planSchema = mongoose.Schema(
    {
        _id: Number,
        title: String,
        date: Date, //작성
        start: Date,
        end: Date,
        color: String,
        content: String,
        writer: writerSchema,

        views: Number,
    },
    { collection: "plan" }
);

const Plan = mongoose.model("Plan", planSchema);

export { Plan };
