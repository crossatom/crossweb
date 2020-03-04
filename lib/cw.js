/* 
** ====== [ CROSSWEB FRAMEWORK ] ======
** Version: 0.1.0
*/

// Import components
import CWApp from './base/app.js'
import CWButton from "./base/button.js"
import CWText from "./base/text.js"
import CWLink from "./base/link.js"
import CWImage from "./base/image.js"
// import CWField from "./base/field.js"

export default class CrossWeb {
    
    // Application arguments
    args = {}
    def_args = {
        debug: false,
        theme: 'atomic',
        routes: [],
        storage: {},
        events: {
            beforeLoad: () => {},
            afterLoad: () => {}
        },
        clicktype: ''
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
        
        // Check & set type of click
        var mobilePlatforms = [
            'Linux armv7l',
            'Android',
            null,
            'iPhone',
            'iPod',
            'iPad',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad Simulator',
            'Pike v7.6 release 92',
            'Pike v7.8 release 517',
            'BlackBerry',
            'Linux MSM8960_v3.2.1.1_N_R069_Rev:18',
            'Nokia_Series_40',
            'S60',
            'Symbian',
            'Symbian OS',
            'webOS'
        ]
        if(mobilePlatforms.indexOf(navigator.platform) != -1) this.args.clicktype = 'touchstart'
        else this.args.clicktype = 'click'
        if(this.args.debug == true) console.log('Selected type of device: ' + ((this.args.clicktype == 'click') ? 'desktop' : 'mobile'))

        // Run 'after init' function if exists
        if(this.args.events.afterLoad !== undefined) this.args.events.afterLoad()

        var tempContent = document.body

        // Check application
        var settings = document.querySelector('cw-app')
        if(settings !== null) {
            new CWApp(settings.attributes)
            if(this.args.debug == true) console.log('Settings', settings)
        }

        // === [ BASIC ELEMENTS ] ===
        // Button handlers
        var buttonList = tempContent.querySelectorAll('cw-button')
        buttonList.forEach(e => {
            if(e.attributes['hide-sm'] !== undefined && window.innerWidth < 500) e.remove()
        })
        this.handleButton(buttonList)

        // Text handlers
        var textList = tempContent.querySelectorAll('cw-text')
        textList.forEach(e => {
            if(e.attributes['hide-sm'] !== undefined && window.innerWidth < 500) e.remove()
        })
        this.handleText(textList)

        // Link handlers
        var linkList = tempContent.querySelectorAll('cw-link')
        linkList.forEach(e => {
            if(e.attributes['hide-sm'] !== undefined && window.innerWidth < 500) e.remove()
        })
        this.handleLink(linkList)

        // Image handlers
        var imgList = tempContent.querySelectorAll('cw-img')
        imgList.forEach(e => {
            if(e.attributes['hide-sm'] !== undefined && window.innerWidth < 500) e.remove()
        })
        this.handleImg(imgList)

        // // Field handlers
        // var fieldList = tempContent.querySelectorAll('cw-input')
        // this.handleField(fieldList)

        // === [ COMPONENTS ] ===
    }

    // Button handler
    handleButton(list) {    
        if(this.args.debug == true) console.log('Button list', list)
        
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var btn = new CWButton(arglist, list[i].innerHTML, this.args.clicktype)
            document.body.querySelector('cw-button').replaceWith(btn)
        } 
    }

    // Text handler
    handleText(list) {
        if(this.args.debug == true) console.log('Text list', list)
        
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var txt = new CWText(arglist, list[i].innerHTML)
            document.body.querySelector('cw-text').replaceWith(txt)
        }
    }

    // Link handler
    handleLink(list) {
        if(this.args.debug == true) console.log('Link list', list)
        
        for(var i = 0; i < list.length; i++) {
            var arglist = list[i].attributes
            var lnk = new CWLink(arglist, list[i].innerHTML, this.args.clicktype)
            document.body.querySelector('cw-link').replaceWith(lnk)
        }
    }

    // Image handler
    handleImg(list) {
        if(this.args.debug == true) console.log('Image list', list)
        
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