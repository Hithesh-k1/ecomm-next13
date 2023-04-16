import styles from './warning.module.css';

export default function Warning({ message }) {
  return <p className={styles.warningMsg}>{message}</p>;
}
