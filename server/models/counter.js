import mongoose from "mongoose";
const counterSchema = mongoose.Schema(
    {
        _id: Number,
        name: String,
        count: Number,
    },
    { collection: "counter" }
);

counterSchema.statics.findOnebyName = async function (name) {
    return await Counter.findOne({ name: name });
};

const Counter = mongoose.model("Counter", counterSchema);
export { Counter };
