import "./Card.css";

export default (props) => {
    const { title, color } = props;

    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}