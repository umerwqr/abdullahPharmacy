"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// User schema definition
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure the email is unique
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "member"], // Restrict to either admin or member
        required: true,
    },
    emailVerifiedAt: {
        type: Date,
        default: null, // Null if the email isn't verified yet
    },
    rememberToken: {
        type: String,
        default: null, // Token used for remembering the user on login
    },
}, {
    timestamps: true, // To automatically add createdAt and updatedAt fields
});
// Create and export the User model
const User = mongoose_1.default.model("Users", userSchema);
exports.default = User;
