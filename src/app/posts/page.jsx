import Link from "next/link"

export const getPost = async() =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      return data
}

export default async function Posts() {
      
      const posts =  await getPost()
      console.log(posts)
  return (
    <div>
            <div className=" container mx-auto grid grid-cols-4 gap-5">
                  {
                        posts.map(post => <div key={post.id} className=" border border-gray-600 p-4 rounded mb-3 w-full h-full justify-between flex flex-col ">
                              <h1 className=" font-bold text-xl">{post?.title}</h1>
                              <p className=" text-gray-400">{post?.body}</p>
                              <Link className=" " href={`/posts/${post?.id}`}><button className="border-1 border-white rounded p-e ">Details</button></Link>
                        </div>)
                  }
            </div>
    </div>
  )
}
