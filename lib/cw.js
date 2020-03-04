/* 
** ====== [ CROSSWEB FRAMEWORK ] ======
** Version: 0.1.0
*/

// Import components
import CWApp from './base/app.js'
import CWButton from "./base/button.js"
import CWText from "./base/text.js"
// import CWLink from "./base/link.js"
import CWImage from "./base/image.js"
// import CWField from "./base/field.js"

export default class CrossWeb {
    
    // Application arguments
    args = {}
    def_args = {
        theme: 'atomic',
        routes: [],
        storage: {},
        events: {
            beforeLoad: () => {},
            afterLoad: () => {}
        },
        device: 'mobile'
    }

    // Framework details
    framework = {
        version: '0.1.0'
    }

    // Constructor
    constructor(args = this.def_args) {
        // Check arguments
        if(!(args instanceof Object)) throw new Error('Cannot init framework: incorrect argument list')
        
        Object.assign(this.args, this.def_args)
        Object.assign(this.args, args)        

        // Run 'before init' function if exists
        if(this.args.events.beforeLoad !== undefined) this.args.events.beforeLoad()

        var tempContent = document.body

        // Check application
        var settings = document.querySelector('cw-app')
        if(settings !== null) {
            new CWApp(settings.attributes)
        }

        // === [ BASIC ELEMENTS ] ===
        // Button handlers
        var buttonList = tempContent.querySelectorAll('cw-button') 
        this.handleButton(buttonList)

        // Text handlers
        var textList = tempContent.querySelectorAll('cw-text')
        this.handleText(textList)

        // // Link handlers
        // var linkList = tempContent.querySelectorAll('cw-link')
        // this.handleLink(linkList)

        // Image handlers
        var imgList = tempContent.querySelectorAll('cw-img')
        this.handleImg(imgList)

        // // Field handlers
        // var fieldList = tempContent.querySelectorAll('cw-input')
        // this.handleField(fieldList)

        // Run 'after init' function if exists
        if(this.args.events.afterLoad !== undefined) this.args.events.afterLoad()
    }

    // Button handler
    handleButton(list) {        
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var btn = new CWButton(arglist, list[i].innerHTML, (this.args.device == "desktop" ? 'click' : 'touchstart' ))
            document.body.querySelector('cw-button').replaceWith(btn)
        } 
    }

    // Text handler
    handleText(list) {
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var txt = new CWText(arglist, list[i].innerHTML)
            document.body.querySelector('cw-text').replaceWith(txt)
        }
    }

    // // Link handler
    // handleLink(list) {
    //     for(var i = 0; i < list.length; i++) {
    //         var arglist = list[i].attributes
    //         new CWLink(arglist, list[i].innerHTML)
    //     }
    // }

    // Image handler
    handleImg(list) {
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var img = new CWImage(arglist)
            document.body.querySelector('cw-img').replaceWith(img)
        }
    }

    // // Field handler
    // handleField(list) {
    //     for(var i = 0; i < list.length; i++) {
    //         var arglist = list[i].attributes
    //         new CWField(arglist)
    //     }
    // }
}