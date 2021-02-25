import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Get_All_Posts, Create_Post } from "../utils/constants";

const Home = () => {
  const [postsField, setPostsFields] = useState({});

  //Get all post
  const { loading, error, data } = useQuery(Get_All_Posts, {
    variables: {
      options: {
        paginate: {
          page: 13,
          limit: 8,
        },
      },
    },
  });

  //Add on post
  const [createPost, { postData }] = useMutation(Create_Post);

  if (loading) return <div className="text-2xl">...loading</div>;
  if (error) `Error! ${error.message}`;

  let posts = data.posts.data;

  const articlesList = posts.map(({ id, title }, index) => (
    <Link key={index} href={`posts/${id}`}>
      <div className="h-20 pl-2 border-2 rounded my-2 w-2/3 cursor-pointer">
        <p>id: {id} </p>
        <p>Title : {title} </p>
      </div>
    </Link>
  ));

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPostsFields({ ...postsField, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost({
      variables: {
        input: {
          title: postsField.title,
          body: postsField.body,
        },
      },
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <Head>
        <title>Nextwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-10">
        <h2 className="mb-3">Create a post :</h2>
        <form onSubmit={handleSubmit}>
          <label className="mr-3">
            title:
            <input
              className="border rounded ml-2 pl-1"
              onChange={handleOnChange}
              type="text"
              name="title"
            />
          </label>
          <label className="mr-3">
            body:
            <input
              className="border rounded ml-2 pl-1"
              onChange={handleOnChange}
              type="text"
              name="body"
            />
          </label>
          <input type="submit" value="Create a post" />
        </form>
      </div>
      <h2 className="mb-3">All post :</h2>
      <div>{articlesList}</div>
    </div>
  );
};

export default Home;
