import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { Get_Post, Update_Post } from "../../utils/constants";

const Post = () => {
  const Router = useRouter();
  const [inputField, setInputField] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    setId(Router.query.id);
  }, []);

  //Get a post
  const { loading, error, data } = useQuery(Get_Post, {
    variables: {
      id: id,
    },
  });

  //Update a post
  const [updatePost] = useMutation(Update_Post);

  if (loading) return <div className="text-2xl">...loading</div>;
  if (error) `Error! ${error.message}`;

  // setInputField({ ...inputField, data });

  const handleSubmit = () => {};

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });
  };

  console.log(inputField);

  return (
    <div>
      <div className="mb-10 cursor-pointer" onClick={() => Router.back()}>
        &#8592; back
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mr-3 mb-5">
          title:
          <input
            className="border rounded w-96 ml-2 pl-1"
            onChange={handleOnChange}
            type="text"
            name="title"
            value={inputField.title}
          />
        </label>
        <label className="mr-3 mb-5">
          body:
          <textarea
            className="border rounded w-96 ml-2 pl-1"
            onChange={handleOnChange}
            name="body"
            value={inputField.body}
          />
        </label>
        <input className="w-32" type="submit" value="Update a post" />
      </form>
    </div>
  );
};

export default Post;
