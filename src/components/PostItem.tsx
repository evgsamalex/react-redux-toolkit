import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return <div className="post">{post.title}</div>;
};

export default PostItem;
