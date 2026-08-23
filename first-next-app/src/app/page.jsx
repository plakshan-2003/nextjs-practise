import styles from "./page.module.css";
import Link from "next/link";
import Image  from "next/image";
import img1 from "../../public/img3.jpg";

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
       <Image
       src={img1}
       />
    </div>


  );
}
