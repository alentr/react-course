import IndirectChild from "./IndirectChild";

const IndirectFather = (props) => {
    let name = '?'
    let age = 0
    let bool = false

    function provideInformation(name, age, bool) {
        name = name
        age = age
        bool = bool
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{bool ? 'True' : 'False'}</span>
            </div>
            <IndirectChild custonPropWhenClick={provideInformation}></IndirectChild>
        </div>
    );
}   

export default IndirectFather;