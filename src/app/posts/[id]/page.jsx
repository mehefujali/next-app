

export default async function SiglePost({params}) {
      const  p = await params;
      
  return (
    <div>
      {p.id}
    </div>
  )
}
