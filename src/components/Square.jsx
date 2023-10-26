

export default function Square ({value, onClick}) {

  return (
    <>
    <div>
      <button onClick={onClick}>
        {value}
      </button>
    </div>
    </>
  )
}