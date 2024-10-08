import styles from './FormContainer.module.scss'

export const FormContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}
