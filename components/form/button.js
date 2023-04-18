import style from './button.module.css';

export default function Button({ type, title }) {
  return <button className={style.button} type={type}>{title}</button>;
}
