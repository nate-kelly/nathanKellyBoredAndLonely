const Form = ({ submit, selection }) => {
  const categories = ['recreational', 'education', 'cooking', 'relaxation', 'busywork', 'music', 'diy'];
  return (
    <section className='formSection'>
      <form onSubmit={submit}>
        <h3>Choose a category:</h3>
        {
          categories.map((type, index) => {
            return (
              <div className='radioSelect' key={index}>
                <input
                  type='radio'
                  name='activityType'
                  id={type}
                  onChange={(event) => selection(event.target.value)}
                  value={type}
                  required
                />
                <label htmlFor={type}>{type}</label>
              </div>
            )
          })
        }
        <button>Give me something to do!</button>
      </form>
    </section>
  )
}

export default Form;