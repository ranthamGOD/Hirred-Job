import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Landing from './pages/landing'
import OnBoarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import PostJobs from './pages/post-jobs'
import Savedjobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/onboarding',
          element: <OnBoarding />,
        },
        {
          path: '/joblisting',
          element: <JobListing />,
        },
        {
          path: '/jobs',
          element: <JobListing />,
        },
        {
          path: '/job/:id',
          element: <JobPage />,
        },
        {
          path: '/post-job',
          element: <PostJobs />,
        },
        {
          path: '/saved-job',
          element: <Savedjobs />,
        },
        {
          path: '/my-jobs',
          element: <MyJobs />,
        },

      ]
    }
  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
