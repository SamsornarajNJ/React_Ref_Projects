const simpleCount = () => {
   const [count, setState] = useState(0);
   return (
    <>
     <button type="button" onClick={setCount((prev) => prev - 1)}>
        Deccrement
      </button>
      <p>{count}</p>
      <button type="button" onClick={setCount((prev) => prev + 1)}>
        Increment
      </button>
    </>
   )
}

export default simpleCount;