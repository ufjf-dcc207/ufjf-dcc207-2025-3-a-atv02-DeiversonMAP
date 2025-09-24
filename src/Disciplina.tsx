import "./Disciplina.css"

function Disciplina() {
    const codigo: string = "DCC207";
    const nome: string = "Desenvolvimento Web Front-End"
    return (
        <div className="disciplina">
            <div >{codigo}</div>
            <div>{nome}</div>
        </div>
    );
}

export default Disciplina;