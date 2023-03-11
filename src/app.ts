import { createMemo } from 'solid-js';

export default function App(props) {
  return createMemo(() => props.children);
}
