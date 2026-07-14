function Layout(props) {
    return (
        <div style={{
            border: "2px solid white",
            borderRadius: "8px",
            padding: "20px",
            margin: "20px",
         }}
>

            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Layout;