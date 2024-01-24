"use client";
import Aside from "@/components/Aside";
import styles from "./page.module.css";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Aside />
      <Chatbot />
    </main>
  );
}
