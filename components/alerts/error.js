import style from './error.module.css';

export default function Alert({ message }) {
  return <p className={style.errorMsg}>{message}</p>;
}
