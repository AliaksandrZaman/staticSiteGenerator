import { useEffect, useState } from "react";
import "./Canvas.scss"
import PopUpMenu from "../popUp/PopUp";

type CanvasProps = {
    children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
    const [showPopup, setShowPopup] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [entityName, setEntityName] = useState("")

  
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        setShowPopup(!showPopup);
        setPopupPosition({ x: event.clientX, y: event.clientY });
        setParentElement(event.target as HTMLElement);
    }

    function createElemWithName(name: string, element: string, parent: HTMLElement | null = parentElement, styles?: Partial<CSSStyleDeclaration>, typeOfInput?: string, placeholder: string = "") {
      if (parent && parent.tagName !== 'INPUT' && parent.tagName !== "BUTTON") {
        if (name !== "") {
          const newDiv = document.createElement(element);
          newDiv.className = name;
          if (element === 'input' && typeOfInput) {
            newDiv.setAttribute('type', typeOfInput);
            if (typeOfInput === "text") {newDiv.setAttribute("placeholder", placeholder)}
          }    
          Object.assign(newDiv.style, styles);
          parent.appendChild(newDiv);}
      }
    }
    

    
    return (
        <>
          <div className="Canvas" onClick={handleClick}>
            {children}
          </div>
          {showPopup && (
            <PopUpMenu parentElement={parentElement!} position={popupPosition!} createElemWithName={createElemWithName}
            entityName={entityName} setEntityName={setEntityName} setShowPopup={setShowPopup}/>
          )}
        </>
      );
    }
    
  

export default Canvas