import './index.css'

const ImageQuestion = props => {
  const {
    question,
    selectedOption,
    handleOptionSelect,
    moveToNextQuestion,
    questionNumber,
  } = props
  return (
    <div className="image-container">
      <h2 className="question-text-img">
        {questionNumber + 1}. {question.questionText}
      </h2>
      <hr className="horizontal-line-img" />
      <ul className="option-container">
        {question.options.map(option => (
          <p
            type="button"
            key={option.optionId}
            className={
              selectedOption === option.optionId ? 'selectedImg' : 'normalImg'
            }
            onClick={() => handleOptionSelect(option.optionId)}
          >
            {option.imageUrl && (
              <img src={option.imageUrl} alt={`Option ${option.text}`} />
            )}
          </p>
        ))}
      </ul>
      <button className="nxt-button" type="button" onClick={moveToNextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default ImageQuestion
