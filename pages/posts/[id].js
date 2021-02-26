import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Get_Post, Update_Post, Delete_Post } from "../../utils/constants";

const Post = () => {
  const prefill = {
    title: "asdfasdfa",
    body: "dafdfa",
  };

  const Router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: prefill,
  });
  const [id, setId] = useState();

  useEffect(() => {
    setId(Router.query.id);
  }, [Router]);

  //Get a post
  const { loading, error, data } = useQuery(Get_Post, {
    variables: {
      id: id,
    },
  });

  //Update a post
  const [updatePost] = useMutation(Update_Post);

  //Delete a post
  const [deletPost] = useMutation(Delete_Post);

  if (loading) return <div className="text-2xl">...loading</div>;
  if (error) `Error! ${error.message}`;

  const onSubmitUpdatePost = (data) => {
    updatePost({
      variables: {
        id: id,
        input: {
          title: data.title,
          body: data.body,
        },
      },
    }).then((res) => console.log(res));
  };

  const handleDeletePost = () => {
    deletPost({
      variables: {
        id: id,
      },
    }).then((res) => {
      console.log(res);
      Router.back();
    });
  };

  return (
    <div>
      <div className="mb-10 cursor-pointer" onClick={() => Router.back()}>
        &#8592; back
      </div>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmitUpdatePost)}
      >
        <label className="mr-3 mb-5">
          title:
          <input
            className="border rounded w-96 ml-2 pl-1"
            ref={register}
            type="text"
            name="title"
          />
        </label>
        <label className="mr-3 mb-5">
          body:
          <textarea
            className="border rounded w-96 ml-2 pl-1"
            ref={register}
            name="body"
          />
        </label>
        <input className="w-32 mb-5" type="submit" value="Update your post" />
      </form>
      <button onClick={handleDeletePost} className="w-32 border">
        Delete your post
      </button>
    </div>
  );
};

export default Post;
