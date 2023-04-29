import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => router.push('/'), 50000)
  }, [])

  return (
    <div className="loading-page">
      <div className="page-404">
        <h1>Sorry, Page not found!</h1>
        <p>Page you are requested for is corrently unavailable.</p>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default NotFound
