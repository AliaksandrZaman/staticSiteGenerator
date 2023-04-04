import { useState } from "react";
import "./htmlMenu.scss"
import Button from "./btn/btn";
import Div from "./div/div";
import Input from "./input/input";
import Text from "./text/text";

type HTMLMenuProps = {
    parentElement: HTMLElement;
    createElemWithName: (name: string, element: string, parent: HTMLElement | null, styles?: Partial<CSSStyleDeclaration>, typeOfInput?: string, placeholder?: string) => void;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
    entityName: string;
};

function HTMLMenu({ parentElement, createElemWithName, entityName, setEntityName }: HTMLMenuProps) {

    const [isDiv, setDiv] = useState(true)
    const [isText, setText] = useState(false)
    const [isBtn, setBtn] = useState(false)
    const [isInput, setInput] = useState(false)

    function onEntityNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setEntityName(event.target.value);
    }

    function onDiv() {
        setDiv(true)
        setText(false)
        setBtn(false)
        setInput(false)
    }

    function onText() {
        setDiv(false)
        setText(true)
        setBtn(false)
        setInput(false)
    }

    function onBtn() {
        setDiv(false)
        setText(false)
        setBtn(true)
        setInput(false)
    }

    function onInput() {
        setDiv(false)
        setText(false)
        setBtn(false)
        setInput(true)
    }

    return (
        <div className="HTMLMenu">
            <div className="Menu">
                <p>Create: </p>
                <div className="div" onClick={onDiv}>div</div>
                <div className="text" onClick={onText}>text</div>
                <div className="button" onClick={onBtn}>btn</div>
                <div className="input" onClick={onInput}>input</div>
            </div>
            <div>
                {isDiv ? <Div onEntityNameChange={onEntityNameChange} entityName={entityName} createElemWithName={createElemWithName} parentElement={parentElement} setEntityName={setEntityName}/> : null}
                {isText ? <Text onEntityNameChange={onEntityNameChange} entityName={entityName} parentElement={parentElement} setEntityName={setEntityName}/> : null}
                {isBtn ? <Button onEntityNameChange={onEntityNameChange} entityName={entityName} parentElement={parentElement} setEntityName={setEntityName}/> : null}
                {isInput ? <Input onEntityNameChange={onEntityNameChange} entityName={entityName} createElemWithName={createElemWithName} parentElement={parentElement} setEntityName={setEntityName}/> : null}
            </div>
        </div>
    )
}

export default HTMLMenu