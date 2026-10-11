import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="page-main section-space">
      <div className="container text-center">
        <p className="eyebrow">404</p>
        <h1>This page is <span>not here.</span></h1>
        <Link className="btn btn-accent mt-3" to="/">Return home</Link>
      </div>
    </main>
  )
}