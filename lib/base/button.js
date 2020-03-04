export default class CWButton {
    constructor(args, text, clicktype) {
        var elem = document.createElement('button')
            elem.style.margin = args['margin'] !== undefined ? args['margin'].value : '10px'
            elem.style.alignSelf = args['align'] !== undefined ? args['align'].value : 'flex-start'
            elem.innerHTML = text

        if(args['click'] !== undefined) {
            elem.addEventListener(clicktype, e => {
                new Function(args['click'].value)()
            })
        }

        if(args['hide-sm'] !== undefined) elem.classList.add('hide-sm')

        return elem
    }
}