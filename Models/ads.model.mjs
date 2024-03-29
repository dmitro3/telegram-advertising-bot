import { Schema, model } from "mongoose";

const ads = new Schema({
    _id: { type: String, required: true, unique: true },
    chat_id: { type: Number, required: true },
    type: { type: String, required: true },
    username: { type: String },
    link: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, default: 0 },
    cpc: { type: Number, required: true },
    budget: { type: Number, required: true },
    remaining_budget: { type: Number, required: true },
    completed: { type: Array, default: [] },
    skip: { type: Array, default: [] },
    status:{ type: Boolean, default: true }
})

export const adsCollection = model("ads", ads)