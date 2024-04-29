import students from "../../data/students";

export default (props) => {

    const list = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} - {student.grade}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {list}
            </ul>
        </div>
    )
}