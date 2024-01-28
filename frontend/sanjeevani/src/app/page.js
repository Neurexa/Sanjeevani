"use client";
import Aside from "@/components/Aside";
import Chatbot from "@/components/Chatbot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Aside />
      <Chatbot />
    </main>
  );
}
