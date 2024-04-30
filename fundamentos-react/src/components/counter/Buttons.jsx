
const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}

export default Buttons;