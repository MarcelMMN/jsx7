function sidebar({title, item1, item2, item3}) {
    return(
        <div style={{
            backgroundColor: 'white',
            padding: '20px',
            margin: '0'
        }}>
            <h2>{title}</h2>
            <h3>{item1}</h3>
            <h3>{item2}</h3>
            <h3>{item3}</h3>
        </div>
    );
}

export default sidebar;