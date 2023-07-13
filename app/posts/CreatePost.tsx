"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: "this is a test",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    console.log(data);

    setTitle("");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
