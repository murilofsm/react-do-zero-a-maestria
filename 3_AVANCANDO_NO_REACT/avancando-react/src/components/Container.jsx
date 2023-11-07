const Container = ({ children, myValue }) => {
    return (
        <>
            <h2>Este é o título do Container</h2>
            {children}
            <p>{myValue}</p>
        </>
    )
}

export default Container