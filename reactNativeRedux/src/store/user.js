const CHANGE_EMAIL = 'user/change_email';
const CHANGE_NAME = 'user/change_name';

export const changeEmail = email => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const changeName = name => ({
  type: CHANGE_NAME,
  payload: name,
});

const initialState = {
  email: 'francisco@gmail.com',
  name: 'Francisco',
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {...state, email: action.payload};
    case CHANGE_NAME:
      return {...state, name: action.payload};
    default:
      return state;
  }
};
