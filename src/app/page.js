import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p> Hola esto es una p </p>
      <span> Esto es un span </span>
      <button>Limpiar</button>
      <button>Agregar</button>
      
    </div>
  );
}
