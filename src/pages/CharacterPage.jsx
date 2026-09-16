import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'

const questions = [
  { key: 'major', number: '01', title: '你的专业方向', subtitle: '它是起点，但不会定义终点', options: ['文科', '理科', '商科', '艺术'] },
  { key: 'personality', number: '02', title: '你更像哪一种人', subtitle: '没有标准答案，凭第一感觉选择', options: ['探索型', '稳定型', '理想型', '实干型'] },
  { key: 'mood', number: '03', title: '此刻面对毕业', subtitle: '你的内心天气是……', options: ['迷茫', '焦虑', '兴奋', '平静'] },
]

function CharacterPage() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({ major: '', personality: '', mood: '' })
  const isComplete = Object.values(answers).every(Boolean)

  const choose = (key, value) => setAnswers((current) => ({ ...current, [key]: value }))
  const startGame = () => {
    if (!isComplete) return
    sessionStorage.setItem('playerProfile', JSON.stringify(answers))
    navigate('/game')
  }

  return (
    <PageShell step="建立角色 · 01 / 03" className="character-page">
      <section className="character-panel">
        <div className="section-heading">
          <p className="eyebrow"><span />BEFORE WE START</p>
          <h1>先认识一下，<em>此刻的你</em></h1>
          <p>选出最接近你的答案，为这趟未来旅程设置一个起点。</p>
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <fieldset className="question-block" key={question.key}>
              <legend>
                <span>{question.number}</span>
                <span><strong>{question.title}</strong><small>{question.subtitle}</small></span>
              </legend>
              <div className="option-grid">
                {question.options.map((option, index) => (
                  <button
                    type="button"
                    className={answers[question.key] === option ? 'option selected' : 'option'}
                    onClick={() => choose(question.key, option)}
                    key={option}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    {option}
                    <span className="option-check">✓</span>
                  </button>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="character-action">
          <span>{isComplete ? '角色设定完成，准备出发' : `还需选择 ${Object.values(answers).filter((item) => !item).length} 项`}</span>
          <button className="primary-button" type="button" disabled={!isComplete} onClick={startGame}>
            进入毕业时刻 <span className="button-arrow">↗</span>
          </button>
        </div>
      </section>
    </PageShell>
  )
}

export default CharacterPage
