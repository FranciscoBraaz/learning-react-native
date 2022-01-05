const CHANGE_DESCRIPTION = 'notes/changeDescription';
const CHANGE_TITLE = 'notes/changeTitle';

export const changeDescription = ({description, index}) => ({
  type: CHANGE_DESCRIPTION,
  payload: {
    description,
    index,
  },
});

export const changeTitle = ({title, index}) => ({
  type: CHANGE_TITLE,
  payload: {
    title,
    index,
  },
});

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
    case CHANGE_TITLE:
      return {
        ...state,
        list: state.list.map((item, indexItem) => {
          if (indexItem === index) {
            item.title = action.payload.title;
          }
          return item;
        }),
      };
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        list: state.list.map((item, indexItem) => {
          if (indexItem === index) {
            item.description = action.payload.description;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
