
const DirectChild = (props) => {

    const { name, age, bool } = props;

    return (
        <div>
            <span>{name} </span>
            <span><strong>{age} </strong></span>
            <span>{bool ? 'True' : 'False'}</span>
        </div>
    )
}

export default DirectChild;