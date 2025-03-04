import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import Layout from '@/layouts'

const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        // lazy: () => import('@/pages/home')
      },
      {
        path: 'about',
        element: <About />,
        // lazy: () => import('@/pages/about')
      }
    ]
  }
])

export default router
