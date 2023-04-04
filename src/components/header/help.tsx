import "./help.scss"
import Close from "../../assets/Close.svg"

type HelpProps = {
    onCloseHelp: () => void
}


function Help ({onCloseHelp}: HelpProps) {
    function findX () {
        const div = document.querySelector('.HelpB')
        if (div != null) {
            const rect = div.getBoundingClientRect()
            const leftX = rect.left
            return (leftX - 220)
        }
    }

    const style: {} = {
        position: 'absolute',
        top: "55px",
        left: findX(),
    };
    
    return (
        <div className="Help" style={style}>
            <div className="topHelp">
                <div onClick={onCloseHelp}><img className="closeHelp" src={Close} alt="" /></div>
            </div>
            <p>{"This page is a generator of static pages. To create a new element or change the styles of an existing one, click on the field below. A menu will appear on the screen. The HTML tab is responsible for creating new elements within the selected element (the one you clicked on). At the moment you can create a div (you must specify class name), a text paragraph (you must specify class name and text that you want to enter), a button (you must specify class name and text that you want to enter inside the button) and user input (you must specify class name, input type and if input type is text, then placeholder must be specified). You can also remove elements by clicking on remove button."}</p>
            <p>{"To change styles of already created elements you need to click on the element that you want to change, and then open the CSS tab. There you will see a lot of styles. Each input line passes data as a string, so for styles to work, they need to be passed in as required by the documentation (for example, to change the border, the standard is '<width> <boundary type> <boundary color>', so an example of the correct input would be '1px solid black'). Also, some styles are initially hidden because they won't work with standard styles. To open them, the styles they work with must be enabled, or other conditions must be met. 'Min height' and 'Max height' cannot be set while 'Height' is specified. The same situation is with 'Min width', 'Max width' and 'Width'. In order for the styles 'Justify content', 'Align items', 'Flex direction' to appear, you must enter in the 'Display' field the value 'flex'. In order for the 'Grid' style to appear, you must enter the value 'grid' in the 'Display' field. For the styles 'Color', 'Font family', 'Font size', 'Font style', 'Font weight' to appear it is necessary that the element you clicked on was created with the text creation section."}</p>
            <p>{"After creating the layout you want, click on the 'Code' button in the upper right corner. The HTML code will be copied to your computer's clipboard and will work just like the HTML code you created in the web application. To use that code, create an .html file, add the elements you want in the <head> element and paste the clipboard code after it. The copied code looks like this: <body style='margin: 0px;'> {The page you created} </body>."}</p>
        </div>
    )
}

export default Help