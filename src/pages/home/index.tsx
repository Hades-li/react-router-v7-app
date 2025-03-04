import { Button } from 'antd-mobile'
import styles from './index.module.scss'

const Component = () => {
  return (
    <div className={styles.home}>
      <h1>Home Page</h1>
      <Button color='primary' className={styles.btn}>Click Me</Button>
    </div>
  )
}

export default Component
