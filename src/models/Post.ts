import { Schema, model, models, Document, Model } from "mongoose";

export interface PostType extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Post: Model<PostType> = models.Post || model("Post", PostSchema);
