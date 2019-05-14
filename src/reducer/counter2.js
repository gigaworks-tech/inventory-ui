export default function counter2(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTBY2':
      return state + 2;
    case 'DECREMENTBY2':
      return state - 2;
    default:
      return state;
  }
}
