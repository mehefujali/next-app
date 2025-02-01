export default async function SiglePost({ params }) {
  const p = await params;
   const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${p.id}`);
    const data = await res.json();
    return data;
  };

  const post = await getPost()
  console.log(post)
  return <div className=" container mx-auto">
    <h1 >{post?.title}</h1>
  </div>;
}
