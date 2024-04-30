import './App.css'

import React from "react";
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'
import Randon from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentsList from './components/loop/StudentsList';
import ProductsTable from './components/loop/ProductsTable';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectFather from './components/communication/DirectFather';
import IndirectFather from './components/communication/IndirectFather';
import Input from './components/form/Input';
import Counter from './components/counter/Counter';
import Mega from './components/mega/Mega';

const App = (props) => {
    return (
        <div className="App">
            <h1>React from scratch</h1>
            <div className="Cards">
                <Card title="Mega" color="#4572ce">
                    <Mega quantity={8} />
                </Card>
                <Card title="Counter" color="#f47721">
                    <Counter initialNumber={10} />
                </Card>
                <Card title="Controlled Components" color="#caccd1">
                    <Input />
                </Card>
                <Card title="Indirect Communication" color="#89ba16">
                    <IndirectFather />
                </Card>
                <Card title="Direct Communication" color="#f47721">
                    <DirectFather />
                </Card>
                <Card title="Conditional Renderization" color="#00bce4">
                    <EvenOrOdd number={20} />
                    <UserInfo user={{ name: 'Alexandre Telles' }} />
                    <UserInfo user={{ email: 'alexandre.ntr@gmail.com' }} />
                    <UserInfo user={{ name: 'Ágda Telles', email: 'agda@gmail.com' }} />
                </Card>
                <Card title="Products Table" color="#7d3f98">
                    <ProductsTable />
                </Card>
                <Card title="Loops" color="#4572ce">
                    <StudentsList />
                </Card>
                <Card title="Children components" color="#caccd1">
                    <Family lastName="Telles">
                        <FamilyMember name="Alexandre" />
                        <FamilyMember name="Ágda" />
                        <FamilyMember name="Heitor" />
                    </Family>
                </Card>
                <Card title="Randon example" color="#f47721">
                    <Randon min={1} max={10} />
                </Card>
                <Card title="Fragment example" color="#89ba16">
                    <Fragment />
                </Card>
                <Card title="With parameter example" color="#7d3f98">
                    <WithParameter
                        title="First component with parameter"
                        subtitle="This is the subtitle"
                        number={9.3} />
                </Card>
                <Card title="First component" color="#00bce4">
                    <First />
                </Card>
            </div>
        </div>
    )
}

export default App;