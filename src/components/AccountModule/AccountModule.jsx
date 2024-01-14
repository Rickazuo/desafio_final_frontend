import styles from "./AccountModule.module.css";

export default function AccountModule({ title, children }) {
  return (
    <main className={`${styles.main} poppins-400-medium`}>
      <p className="poppins-400-medium">{title}</p>
      {children}
    </main>
  );
}
