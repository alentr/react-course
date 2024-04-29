const WithParameter = (props) => {
    console.log(props);
    const status = props.number >= 7 ? 'Approved' : 'Disapproved';
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>subtitle: {props.subtitle}</h2>
            <h3>number: {props.number}</h3>
            <h3>status: {status}</h3>
        </div>
    );
}

export default WithParameter;