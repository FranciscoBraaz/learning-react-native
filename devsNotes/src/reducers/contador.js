const INCREMENTAR = 'contador/incrementar';
const REDUZIR = 'contador/reduzir';

export const incrementar = () => ({
  type: INCREMENTAR,
});

export const reduzir = () => ({
  type: REDUZIR,
});

export default reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case REDUZIR:
      return state - 1;
    default:
      return state;
  }
};
