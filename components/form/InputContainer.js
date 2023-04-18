import style from './inputContainer.module.css';

export default function InputContainer({ children }) {
  return <div className={style.inputContainer}>{children}</div>;
}
