import Image from "next/image"
import img1 from "../../public/4.jpg"


export default function Home() {

  return (
    <>
   <h1>Image component </h1>

   {/* <img src={img1.src} alt="" /> */}

   <Image 
   
   src={"https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
   alt="Sample img"
   //style={{width:"100%", objectFit:"cover"}}
   className="imgcont"

   width={1000}
   height={1000}
   />

   <Image
   src={img1}

   >

   </Image>

    </>
  )
}
