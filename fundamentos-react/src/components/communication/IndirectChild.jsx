
const IndirectChild = props => {
    const { custonPropWhenClick } = props;
    return (
        <div>
            <div>Child</div>
            <button onClick={_ => { custonPropWhenClick('Alexandre Telles', 30, true); }}>
                Provide information
            </button>
        </div>
    )
}

export default IndirectChild;