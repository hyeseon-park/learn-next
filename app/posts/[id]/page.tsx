async function getPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

const PostDetailPage = async ({ params }: any) => {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>포스트 {post.id}</h1>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
};

export default PostDetailPage;
