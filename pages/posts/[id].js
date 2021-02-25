import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { Get_Post, Update_Post } from "../../utils/constants";

const Post = () => {
  const Router = useRouter();
  const [inputField, setInputField] = useState();

  //Get a post
  const { loading, error, data } = useQuery(Get_Post, {
    variables: {
      id: Router.query.id,
    },
  });

  //Update a post
  const [updatePost] = useMutation(Update_Post);

  if (loading) return <div className="text-2xl">...loading</div>;
  if (error) `Error! ${error.message}`;

  const { id, title, body } = data.post;

  const handleSubmit = () => {};
  const handleOnChange = () => {};

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mr-3 mb-5">
          title:
          <input
            className="border rounded w-96 ml-2 pl-1"
            onChange={handleOnChange}
            type="text"
            name="title"
          />
        </label>
        <label className="mr-3 mb-5">
          body:
          <textarea
            className="border rounded w-96 ml-2 pl-1"
            onChange={handleOnChange}
            name="body"
          />
        </label>
        <input className="w-32" type="submit" value="Update a post" />
      </form>
    </div>
  );
};

export default Post;
