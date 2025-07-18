import styles from './styles.module.css'
type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children} : ContainerProps) => {
  return (
    <div className="container_fluid">
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
  )
}

export default Container
