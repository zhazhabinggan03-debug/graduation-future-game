import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

function HomePage() {
  return (
    <PageShell showBrand={false} className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span />GRADUATION SIMULATOR · 2026</div>
          <h1>毕业<span>倒计时</span></h1>
          <p className="hero-subtitle">如果毕业之后的人生可以提前预演一次，<br />你会怎么选？</p>
          <p className="hero-note">从今天出发，在一连串选择里遇见未来的自己。</p>
          <Link className="primary-button" to="/character">
            开始我的人生模拟
            <span className="button-arrow">↗</span>
          </Link>
          <div className="time-hint"><span className="pulse-dot" />预计体验 3 分钟</div>
        </div>

        <div className="future-orbit" aria-hidden="true">
          <div className="orbit-line orbit-one" />
          <div className="orbit-line orbit-two" />
          <div className="future-card">
            <div className="card-top"><span>FUTURE / 01</span><span>●</span></div>
            <div className="sun-shape" />
            <div className="horizon-lines"><i /><i /><i /><i /></div>
            <p>答案不在远方<br /><strong>而在你的每一次选择里</strong></p>
          </div>
          <div className="float-label label-one">选择 · CHOICE</div>
          <div className="float-label label-two">可能性 +∞</div>
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✦</div>
        </div>
      </section>
    </PageShell>
  )
}

export default HomePage
