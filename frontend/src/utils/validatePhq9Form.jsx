export const validatePhq9Form = (values) => {
    const errors = {}
  
    if (!values.answers || Object.keys(values.answers).length === 0) {
      errors.answers = 'Please select an answer for each question'
    }
  
    return errors
  }
  