import { useState } from "react";
import "./text.scss"

type DivProps = {
    onEntityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    entityName: string;
    parentElement: HTMLElement;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
}

function Text ({onEntityNameChange, entityName, parentElement, setEntityName}: DivProps) {
    const [textInput, setTextInput] = useState("")

    function onEntityTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setTextInput(event.target.value);
    }

    function createTextDiv(name: string, element: string, parent: HTMLElement | null = parentElement, textInput: string) {
        if (parent && parent.tagName !== 'INPUT' && parent.tagName !== "BUTTON") {
            if (name !== "" && textInput !== "") {const newDiv = document.createElement(element);
                newDiv.className = name;
                newDiv.textContent = textInput
                Object.assign(newDiv.style, {margin: "0px"});
                parent.appendChild(newDiv);} 
        }
      }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createTextDiv(entityName, "p", parentElement, textInput);
        setEntityName("");
        setTextInput("");
    }

    return (
         <div>
            <form className="Form" onSubmit={handleSubmit}>
                <input className="inputStringClass" type="text" onChange={onEntityNameChange} value={entityName} placeholder="Enter the name of the text class"/>
                <input className="inputStringText" type="text" onChange={onEntityTextChange} value={textInput} placeholder="Type in the text you want to display"/>
                <button className="submitButton" type="submit">Create</button>
            </form>
        </div>
    )
}

export default Text