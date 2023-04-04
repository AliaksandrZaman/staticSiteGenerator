import "./div.scss"

type DivProps = {
    onEntityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    entityName: string;
    createElemWithName: (name: string, element: string, parent: HTMLElement | null, styles?: Partial<CSSStyleDeclaration>) => void;
    parentElement: HTMLElement;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
}

function Div ({onEntityNameChange, entityName, createElemWithName, parentElement, setEntityName}: DivProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createElemWithName(entityName, "div", parentElement, {height: "30px", width: "30px", backgroundColor: "#F2F6FD"});
        setEntityName("");
    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <input type="text" className="inputString" onChange={onEntityNameChange} value={entityName} placeholder="Enter the name of the div class"/>
                <button className="submitButton" type="submit">Create</button>
            </form>
        </div>
    )
}

export default Div