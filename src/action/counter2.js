export function increment(number) {
  return {
    type: 'INCREMENT',
    payload: number + 2,
  };
}

export function decrement(number) {
  return {
    type: 'DECREMENT',
    payload: number + 2,
  };
}
