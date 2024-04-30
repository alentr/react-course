import DirectChild from "./DirectChild";

const DirectFather = () => {
    return (
        <div>
            <h1>Direct Father</h1>
            <DirectChild name="Alexandre" age={33} bool={true} />
            <DirectChild name="Heitor" age={5} bool={false} />
        </div>
    );
}   

export default DirectFather;