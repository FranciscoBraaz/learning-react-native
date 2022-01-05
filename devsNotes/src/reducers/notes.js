const CHANGE_NOTE = 'notes/changeNote';
const ADD_NOTE = 'notes/addNote';
const REMOVE_NOTE = 'notes/removeNote';

export const changeNote = ({title, description, index}) => ({
  type: CHANGE_NOTE,
  payload: {
    title,
    description,
    index,
  },
});

export const addNote = ({title, description}) => ({
  type: ADD_NOTE,
  payload: {
    title,
    description,
  },
});

export const removeNote = ({index}) => ({type: REMOVE_NOTE, payload: {index}});

const initialState = {
  list: [
    {
      title: 'Primeira nota',
      description: 'Descrição primeira notação',
    },
  ],
};

export default reducer = (state = initialState, action) => {
  const index = action.payload?.index;

  switch (action.type) {
    case CHANGE_NOTE:
      return {
        ...state,
        list: state.list.map((item, indexItem) => {
          if (indexItem === index) {
            item.title = action.payload.title;
            item.description = action.payload.description;
          }
          return item;
        }),
      };
    case ADD_NOTE:
      return {
        ...state,
        list: [
          ...state.list,
          {
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        list: state.list.filter(
          (item, itemIndex) => itemIndex !== action.payload.index,
        ),
      };
    default:
      return state;
  }
};
