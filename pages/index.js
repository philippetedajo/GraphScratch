import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Get_All_Posts } from "../utils/constants";

const Home = () => {
  let options = {
    paginate: {
      page: 1,
      limit: 5,
    },
  };
  const [postsField, setPostsFields] = useState({});
  const { loading, error, data } = useQuery(Get_All_Posts, {
    variables: { options },
  });

  if (loading) return <div className="text-2xl">...loading</div>;
  if (error) `Error! ${error.message}`;

  const posts = data.posts.data;

  const articlesList = posts.map((post, index) => (
    <div key={index} className="border-2 rounded my-2 w-2/3">
      {post.title}
    </div>
  ));

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPostsFields({ ...postsField, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postsField);
  };

  return (
    <div>
      <Head>
        <title>Nextwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            title:
            <input onChange={handleOnChange} type="text" name="title" />
          </label>
          <label>
            body:
            <input onChange={handleOnChange} type="text" name="body" />
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
      <div>{articlesList}</div>
    </div>
  );
};

export default Home;
