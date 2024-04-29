
export default (props) => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h1>Randon Value</h1>
            <h3>Min value: {min}</h3>
            <h3>Max value: {max}</h3>
            <h3>Random number:{random}</h3>
        </div>
    );
}