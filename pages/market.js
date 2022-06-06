import styles from "../styles/Market.module.css";
import Link from "next/link";

export default function Market() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Market</h1>
        <nav>
          <ul className={styles.nav}>
            <Link href="/">Home</Link>
          </ul>
        </nav>
      </main>
    </div>
  );
}
