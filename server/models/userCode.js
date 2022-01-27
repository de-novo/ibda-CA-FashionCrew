import mongoose from "mongoose";

const userCodeSchema = mongoose.Schema(
    {
        _id: Number,
        userCode: Number,
        name: String,
    },
    { collection: "userCode" }
);

//  { collection: 'project' }
const UserCode = mongoose.model("UserCode", userCodeSchema);
export { UserCode };
