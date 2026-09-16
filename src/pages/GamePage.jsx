import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

function GamePage() {
  return (
    <PageShell step="人生序章 · 02 / 03" className="game-page">
      <section className="game-placeholder">
        <div className="countdown-ring">
          <div><span>DAY</span><strong>0</strong><small>毕业日</small></div>
        </div>
        <p className="eyebrow"><span />THE STORY BEGINS</p>
        <h1>你的第一个人生选择<br /><em>即将开始</em></h1>
        <p className="game-description">礼堂的掌声渐渐散去，学士帽落下。<br />当你再次睁开眼，未来正等待你的回答。</p>
        <div className="loading-line"><i /></div>
        <Link className="text-link" to="/character">← 重新设置角色</Link>
      </section>
    </PageShell>
  )
}

export default GamePage
