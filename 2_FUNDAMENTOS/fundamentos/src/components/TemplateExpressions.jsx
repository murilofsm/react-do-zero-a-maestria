const TemplateExpressions = () => {
    const nome = "valdir";
    const data = {
        age: 31,
        job: "Programmer"
    }


    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{data.age + 2}</p>
        </div>
    )
}

export default TemplateExpressions