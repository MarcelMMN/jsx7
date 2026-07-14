function hero({headline, description}) {
    return(
        <div style={{
            backgroundColor: 'white',
        }}>
            <h2>{headline}</h2>
            <p>{description}</p>
        </div>
    );
}

export default hero;