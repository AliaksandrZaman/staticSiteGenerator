import { useState } from "react";
import "./Header.scss"
import Copied from "./copied";
import Help from "./help";
import InfoPopUp from "./infoPopUp";

function Header() {
    const [showCopied, setShowCopied] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showCSS, setShowCSS] = useState(false)

    function onHTMLCLick () {
        setShowHelp(false)
        setShowCSS(false)
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
        setShowCSS(false)
    }  

    function onCloseHelp() {
        setShowHelp(false);
    }

    function onCSSClick () {
        setShowCopied(false)
        setShowHelp(false)
        setShowCSS(true)
    }  

    function onCloseCSS() {
        setShowCSS(false);
    }



    return (
        <div className = "Header">
            <div className="Name">Static Site Generator</div>
            <div className="RightSide">
                <div className="HelpB" onClick={onHelpClick}>Help</div>
                <div className="CSSInputs" onClick={onCSSClick}>CSS Inputs</div>
                <div className="Code" onClick={onHTMLCLick}>Code</div>
                {showCopied ? <Copied/> : null}
                {showHelp ? <Help onCloseHelp={onCloseHelp}/> : null}
                {showCSS ? <InfoPopUp onCloseCSS={onCloseCSS}/> : null}
            </div>
            
        </div>
    )
}

export default Header