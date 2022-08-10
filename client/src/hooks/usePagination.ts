import { useState } from "react";

function usePagination() {
  const [index, setIndex] = useState(0);

  async function next() {
    setIndex(index + 10);
  }

  async function back() {
    setIndex(index - 10);
  }

  return {next, back, index}
}

export default usePagination;