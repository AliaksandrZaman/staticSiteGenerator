import { useState } from "react";
import "./input.scss"

type InputProps = {
    onEntityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    entityName: string;
    createElemWithName: (name: string, element: string, parent: HTMLElement | null, styles?: Partial<CSSStyleDeclaration>, typeOfInput?: string, placeholder?: string) => void;
    parentElement: HTMLElement;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
}

function Input ({onEntityNameChange, entityName, createElemWithName, parentElement, setEntityName}: InputProps) {
    const [inputType, setInputType] = useState("text")
    const [placeholder, setPlaceholder] = useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createElemWithName(entityName, "input", parentElement, {display:"block"}, inputType, placeholder);
        setEntityName("");
        setPlaceholder("")
    }

    function onOption () {
        const selectElement = document.querySelector('select[name="inputType"]') as HTMLSelectElement;
        const selectedValue = selectElement.value;
        setInputType(selectedValue)
    }

    function onPlaceholder () {
        const selectElement = document.querySelector('.inputStringText') as HTMLSelectElement;
        const selectedValue = selectElement.value;
        setPlaceholder(selectedValue)
    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <input className="inputString" type="text" onChange={onEntityNameChange} value={entityName} placeholder="Enter the name of the input class"/>
                <select name="inputType" className="inputType" onChange={onOption} defaultValue={"text"}>
                    <option value="text">Text</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                    <option value="date">Date</option>
                </select>
                {inputType === "text" ? <input className="inputStringText" type="text" onChange={onPlaceholder} value={placeholder} placeholder="Enter placeholder for the input"/> : null}
                <button className="submitButton" type="submit">Create</button>
            </form>
        </div>
    )
}

export default Input