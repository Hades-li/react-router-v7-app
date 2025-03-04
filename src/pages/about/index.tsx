import styles from './index.module.scss'
import { Button, Card } from 'antd-mobile'
import { memo } from 'react'

const Component = memo(() => {
  return (
    <div className={styles.about}>
      <h1>About Page</h1>
      <Card title="About Us">
        This is a demo project using React Router v7 with v6 style routing.
      </Card>
      <Button color='primary' className={styles.btn}>Click Me</Button>
    </div>
  )
})

export default Component
