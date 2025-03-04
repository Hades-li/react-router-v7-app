import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          return {
            Component: (await import('@/pages/home')).default
          }
        }
      },
      {
        path: 'about',
        async lazy() {
          return {
            Component: (await import('@/pages/about')).default
          }
        }
      }
    ]
  }
])

export default router
