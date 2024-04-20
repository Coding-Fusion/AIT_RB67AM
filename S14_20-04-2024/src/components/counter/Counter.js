import "./Counter.css";
export function Counter() {
  var countValue = 0;

  const increaseCount = () => {
    ++countValue;
    console.log(countValue);
  };

  function decreaseCount() {
    --countValue;
    console.log(countValue);
  }

  return (
    <div className="counterapp">
      <h2>Count Value is : {countValue}</h2>
      <button onClick={increaseCount}>increaseCount</button>&nbsp;&nbsp;
      <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  );
}
