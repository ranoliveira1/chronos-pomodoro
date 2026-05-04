import styles from './Heading.module.css';

export function Heading(props) {
  return (
    <h1 className={styles.heading}>
      {props.order} {props.children}
    </h1>
  );
}
