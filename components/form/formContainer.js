import style from './formContainer.module.css';

export default function FormContainer({ children }) {
  return <div className={style.formContainer}>{children}</div>;
}
