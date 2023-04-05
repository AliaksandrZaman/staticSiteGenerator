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
            return (leftX - 245)
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
            <div className="tHelp">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"This tool helps you create static web pages. To add a new element or change an existing one, click on the field below. A menu will show up with different options. The HTML tab lets you create new elements within the one you clicked on. You can create a div (with a class name), a text paragraph (with a class name and the text you want to enter), a button (with a class name and the text you want inside the button), or a user input (with a class name, input type, and a placeholder text if it's a text input). You can also remove elements by clicking on the remove button."}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"If you want to change the way something on your website looks, like the size or color, you can do that by clicking on it and then opening the CSS tab. You'll see lots of different styles you can choose from. When you want to change a style, you have to type it in as a string. For example, if you want to change the border around something, you need to write it like this: '1px solid black'. Some styles are hidden at first because they only work in certain situations. For example, you can't set the minimum and maximum height of something if you've already set the height. To see certain styles, like 'Justify content' or 'Flex direction', you need to enter a specific value in the 'Display' field. If you want to use the 'Grid' style, you need to enter 'grid' in the 'Display' field. And finally, if you want to change the color, font family, font size, font style, or font weight of something, you have to make sure that the thing you clicked on was created using the text creation section."}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"Once you've created the layout you want for your website, click on the 'Code' button in the top right corner. This will copy the HTML code to your computer's clipboard, which you can use just like any other HTML code. To use the copied code, you need to create a new .html file and add the elements you want to the <head> section. Then, simply paste the code you copied from the clipboard after the <head> section. The copied code will look something like this: <body style='margin: 0px;'> {Your website's content goes here} </body>."}</p>
            </div>
        </div>
    )
}

export default Help