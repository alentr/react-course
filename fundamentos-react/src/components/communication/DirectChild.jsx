
const DirectChild = (props) => {

    return (
        <div>
            <span>{props.name} </span>
            <span><strong>{props.age} </strong></span>
            <span>{props.bool ? 'True' : 'False'}</span>
        </div>
    )
}

export default DirectChild;