import studentsData from "../../data/studentsData";

const Students = (props) => {

    const list = studentsData.map((student) => {
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

export default Students;