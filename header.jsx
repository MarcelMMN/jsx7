function Header({title, nav1, nav2, nav3, nav4}) {
    return (
        <div style={{
            padding: "15px",
            backgroundColor: 'lightblue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            color: 'black',
            border: '3px solid black',
            borderRadius: '5px'
        }}>
            <h1 style={{ color: 'black' }}>{title}</h1>
            <div style={{
                display: 'flex',
                gap: '20px'
            }}>
                <a href="" style={{ color: 'black' }}>{nav1}</a>
                <a href="" style={{ color: 'black' }}>{nav2}</a>
                <a href="" style={{ color: 'black' }}>{nav3}</a>
                <a href="" style={{ color: 'black' }}>{nav4}</a>
            </div>
        </div>
    );
}

export default Header;