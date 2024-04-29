

export default (props) => {
    const {name, lastName} = props

    return (
        <div>{name} <strong>{lastName}</strong></div>
    )
}