import Messages from './messages';

const emailRegex =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Validations = {
  validateEmail: (value) => {
    let error;
    if (!value) {
      error = Messages.ERROR.LOGIN;
    } else if (!emailRegex.test(value)) {
      error = Messages.ERROR.LOGIN;
    }
    return error;
  },
  validateLoginForm: (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = Messages.ERROR.LOGIN;
    } else if (!emailRegex.test(data.email)) {
      errors.email = Messages.ERROR.LOGIN;
    }
    if (!data.password) {
      errors.password = Messages.ERROR.LOGIN;
    }
    return errors;
  }
};

export default Validations;
