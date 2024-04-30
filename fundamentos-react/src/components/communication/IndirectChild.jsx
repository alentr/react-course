
const IndirectChild = props => {
    const { custonPropWhenClick } = props;
    const generateRandomAge = _ => parseInt(Math.random() * 100);
    const generateRandomBool = _ => Math.random() > 0.5;

    return (
        <div>
            <div>Child</div>
            <button onClick={_ => { custonPropWhenClick('Alexandre Telles', generateRandomAge(), generateRandomBool()); }}>
                Provide information
            </button>
        </div>
    )
}

export default IndirectChild;