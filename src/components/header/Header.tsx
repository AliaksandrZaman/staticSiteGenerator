import { useState } from "react";
import "./Header.scss"
import Copied from "./copied";
import Help from "./help";

function Header() {
    const [showCopied, setShowCopied] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    function onHTMLCLick () {
        setShowHelp(false)
        const myDiv: Element | null = document.querySelector(".Canvas")
        if (myDiv != null) {
            let divHTML = myDiv.outerHTML;
            divHTML = '<body style="margin: 0px;">' + divHTML + "</body>"
            navigator.clipboard.writeText(divHTML)
            setShowCopied(true);
            setTimeout(() => {setShowCopied(false)}, 2000)
        }
    }

    function onHelpClick () {
        setShowCopied(false)
        setShowHelp(true)
    }  

    function onCloseHelp() {
        setShowHelp(false);
    }


    return (
        <div className = "Header">
            <div className="Name">Static Site Generator</div>
            <div className="RightSide">
                <div className="HelpB" onClick={onHelpClick}>Help</div>
                <div className="Code" onClick={onHTMLCLick}>Code</div>
                {showCopied ? <Copied/> : null}
                {showHelp ? <Help onCloseHelp={onCloseHelp}/> : null}
            </div>
            
        </div>
    )
}

export default Header