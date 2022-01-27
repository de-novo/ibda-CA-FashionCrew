import mongoose from "mongoose";

const writerSchema = mongoose.Schema({
    _id: Number,
    name: String,
});
const photoSchema = mongoose.Schema({
    _id: Number,
    model: [writerSchema],
    project: Number,
    date: Date,
    location: String,
    photographer: writerSchema,
    imgUrl: String,
    imgName: String,
    imgRatio: Number,
    writer: writerSchema,
    views: Number,
}, { collection: 'photo' });

photoSchema.statics.findByProjectId = async function (projectId) {
    return await Photo.find({ project: projectId });
};

// { collection: 'photo' }
photoSchema.statics.findByModelId = async function (modelId) {
    return await Photo.find({ model: { $elemMatch: { _id: modelId } } });
};

const Photo = mongoose.model("Photo", photoSchema);
export { Photo };
