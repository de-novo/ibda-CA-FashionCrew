import { Member } from "../../models/member.js";
import { asyncErrorWrapper } from "../../asyncErrorWrapper.js";
import { CustomError } from "../../CustomError.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import { UserCode } from "../../models/userCode.js";
const checkAdmin = asyncErrorWrapper(async (req, res, next) => {
    // console.log("checkAdmin -- req.user ::", req.user);

    const AdminCode = await UserCode.find({ name: { $in: ["admin", "developer"] } });
    // console.log("AdminCode", AdminCode);
    // console.log(
    //     " e._id === req.user.UserCode",
    //     AdminCode.some((e) => e._id === req.user.userCode)
    // );

    if (!AdminCode.some((e) => e._id === req.user.userCode)) {
        throw new CustomError("Forbidden", 403, "Unauthorized");
    }
    next();
});

export { checkAdmin };
