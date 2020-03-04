export default class CWText {
    constructor(args, text) { 
        var elem = document.createElement('p')
            elem.style.fontFamily = args['family'].value !== undefined ? args['family'].value : 'Arial, sans-serif'
            elem.style.fontSize = args['size'].value !== undefined ? args['size'].value : '20px'
            elem.style.fontWeight = args['weight'].value !== undefined ? args['weight'].value : '500'
            elem.style.margin = args['margin'] !== undefined ? args['margin'].value : '10px'
            elem.style.color = args['color'] !== undefined ? args['color'].value : '#000'
            elem.innerHTML = text
        
        if(args['hide-sm'] !== undefined) elem.classList.add('hide-sm')

        return elem
    }
}