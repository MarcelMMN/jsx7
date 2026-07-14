function Student(props) {
    return (
        <div>
            <h2>Name: {props.title}</h2>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Student;