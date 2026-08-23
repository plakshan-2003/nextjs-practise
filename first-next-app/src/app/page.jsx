import styles from "./page.module.css";
import Link from "next/link";
import Image  from "next/image";
// import img1 from "../../public/img3.jpg";

export default function Home() {
  return (
    <div>
      <h2 className={styles.heading}>Heading 2</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <h1>image component</h1>
       {/* <Image
       src={img1}
       alt="img1"
       style={{width:"100%", height:"500px", objectFit:"cover"}}
       /> */}

       <Image
       src="https://images.unsplash.com/photo-1779896411942-ea4ca54de043?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       width={1200}
       height ={1000}
       alt="img1"
       />
    </div>


  );
}
