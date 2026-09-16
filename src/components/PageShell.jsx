import { Link } from 'react-router-dom'

function PageShell({ children, step, showBrand = true, className = '' }) {
  return (
    <main className={`page-shell ${className}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-texture" />

      <header className="topbar">
        {showBrand ? (
          <Link className="brand" to="/" aria-label="返回首页">
            <span className="brand-mark">未</span>
            <span>毕业倒计时</span>
          </Link>
        ) : <span />}
        {step && <span className="step-tag">{step}</span>}
      </header>

      {children}

      <footer className="footer-line">
        <span>GRADUATION · 2026</span>
        <span className="footer-dot" />
        <span>YOUR FUTURE IS LOADING</span>
      </footer>
    </main>
  )
}

export default PageShell
