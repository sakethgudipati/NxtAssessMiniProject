import './index.css'

const SingleSelectQuestion = props => {
  const {
    question,
    selectedOption,
    handleOptionSelect,
    moveToNextQuestion,
  } = props
  return (
    <div className="single-select-container">
      <h2 className="question-text-single">{question.questionText}</h2>
      <hr className="horizontal-line-single" />
      <div className="mini-card">
        <select
          className="select-card"
          value={selectedOption}
          onChange={e => handleOptionSelect(e.target.value)}
        >
          {question.options.map(option => (
            <option
              className={
                selectedOption === option.optionId
                  ? 'selectedOption'
                  : 'normalOption'
              }
              key={option.optionId}
              value={option.optionId}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <button className="nxt-button" type="button" onClick={moveToNextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default SingleSelectQuestion
