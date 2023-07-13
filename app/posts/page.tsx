import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data as any[];
}

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;

const PostItem = ({ post }: any) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div>{post.title}</div>
    </Link>
  );
};
