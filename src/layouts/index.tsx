import { Outlet, Link } from 'react-router'
import { NavBar } from 'antd-mobile'
import styles from './index.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar>React Router Demo</NavBar>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
