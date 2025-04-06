import { Schema, model, models, Model, InferSchemaType } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

type PostType = InferSchemaType<typeof PostSchema>;

export const Post: Model<PostType> = models.Post || model("Post", PostSchema);
