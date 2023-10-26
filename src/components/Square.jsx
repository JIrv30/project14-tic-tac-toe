

export default function Square ({value, onClick}) {

  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    display: 'block',
    width: '100%',
    height: '100%'
  }

  return (
  
    <div>
      <button style={style} onClick={onClick}>
        {value}
      </button>
    </div>
    
  )
}