import { useState } from "react";
import "./PopUp.scss";
import HTMLMenu from "../htmlMenu/htmlMenu";
import CSSMenu from "../cssMenu/cssMenu";
import deleteLogo from "../../assets/trash_delete_remove_recycle_bin_icon_184605.svg"

type Position = {
    x: number;
    y: number;
}  

type PopupMenuProps = {
    parentElement: HTMLElement;
    position: Position;
    createElemWithName: (name: string, element: string, parent: HTMLElement | null, styles?: Partial<CSSStyleDeclaration>, typeOfInput?: string, placeholder?: string) => void;
    setEntityName: React.Dispatch<React.SetStateAction<string>>;
    entityName: string;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};
  
function PopUpMenu({ parentElement, position, createElemWithName, setEntityName, entityName, setShowPopup }: PopupMenuProps) {
    if (position.x + 370 > window.innerWidth) {
        position.x = position.x - 370;
    }

    const style: {} = {
        position: 'absolute',
        top: position.y,
        left: position.x,
    };

    const [isHTML, setHTML] = useState(true)

    function handleClickHTML(event: React.MouseEvent<HTMLDivElement>) {
        {!isHTML ? setHTML(!isHTML) : null}   
    }

    function handleClickCSS(event: React.MouseEvent<HTMLDivElement>) {
        {isHTML ? setHTML(!isHTML) : null}   
    }
    
    function deleteElement() {
        if (parentElement.classList.contains("Canvas")) {
            return;
        }
        if (parentElement.parentNode) {
            parentElement.parentNode.removeChild(parentElement);
            setShowPopup(false)
        }
    }

    const deleteElemStyle: React.CSSProperties = {
        backgroundColor: parentElement.classList.contains("Canvas") ? '#E0115F' : undefined,
    };
    
    
    return (
        <div className="PopUp" style={style}>
            <div className="Top">
                <div className="leftSide">
                    <div className="html" onClick={handleClickHTML}>HTML</div>
                    <div className="css" onClick={handleClickCSS}>CSS</div>
                </div>
                <div className="rightSide">
                    <div className="ActiveElem"> {"Element:"} 
                        <p>{parentElement.classList}</p>
                    </div>
                    <div className="deleteElem" style={deleteElemStyle} onClick={deleteElement}><img src={deleteLogo} alt="" /></div>
                </div>
            </div>
            <div className="Bot">
                {!isHTML ? <CSSMenu parentElement={parentElement}/> : 
                (parentElement.tagName === 'INPUT' || parentElement.tagName === "BUTTON" ? null : <HTMLMenu parentElement={parentElement} createElemWithName={createElemWithName} entityName={entityName} setEntityName={setEntityName}/>)
                }
            </div>
        </div>
    )
}

export default PopUpMenu;