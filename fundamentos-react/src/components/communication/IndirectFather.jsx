import IndirectChild from "./IndirectChild";
import { useState } from "react";

const IndirectFather = (props) => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [bool, setBoll] = useState(false)

    function provideInformation(name, age, bool) {
        setName(name)
        setAge(age)
        setBoll(bool)
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