import React from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

export const PostContainer = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(5);
  console.log(error);
  return (
    <div>
      {isLoading && <h1>Загрузка...</h1>}
      {error && <h1>Ошибка</h1>}
      {posts && posts.map(post => <PostItem post={post} key={post.id}></PostItem>)}
    </div>
  );
};
