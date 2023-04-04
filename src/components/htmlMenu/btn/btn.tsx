import { useState } from "react";
import "./btn.scss"

type BtnProps = {
    onEntityNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    entityName: string;
    parentElement: HTMLElement;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
}

function Button ({onEntityNameChange, entityName, parentElement, setEntityName}: BtnProps) {
    const [textInput, setTextInput] = useState("")

    function onEntityTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setTextInput(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createTextInInput(entityName, "button", parentElement, textInput, {display:"block"});
        setEntityName("");
        setTextInput("");
    }

    function createTextInInput(name: string, element: string, parent: HTMLElement | null = parentElement, textInput: string, styles: Partial<CSSStyleDeclaration>) {
        if (parent && parent.tagName !== 'INPUT' && parent.tagName !== "BUTTON") {
            if (name !== "" && textInput !== "") {
                const newDiv = document.createElement(element);
                newDiv.className = name;
                Object.assign(newDiv.style, styles);
                const text = document.createTextNode(textInput);
                newDiv.appendChild(text);
                parent.appendChild(newDiv);
            }
        }
      }


    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <input className="inputStringClass" type="text" onChange={onEntityNameChange} value={entityName} placeholder="Enter the name of the button class"/>
                <input className="inputStringText" type="text" onChange={onEntityTextChange} value={textInput} placeholder="Type the text inside the button"/>
                <button className="submitButton" type="submit">Create</button>
            </form>
        </div>
    )
}

export default Button