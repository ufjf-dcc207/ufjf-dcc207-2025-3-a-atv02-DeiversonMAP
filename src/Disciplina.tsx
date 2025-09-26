import "./Disciplina.css"

type DisciplinaProps = {
    codigo: string;
    nome: string;
}

function Disciplina({ codigo, nome }: DisciplinaProps) {
    return (
        <div className="disciplina">
            <h1 >{codigo}</h1>
            <div>{nome}</div>
        </div>
    );
}

export default Disciplina;