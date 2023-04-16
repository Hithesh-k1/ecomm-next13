import styles from './success.module.css';

export default function Alert({ message }) {
  return <p className={styles.successMsg}>{message}</p>;
}
