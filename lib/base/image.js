export default class CWImage {
    constructor(args) {
        var elem = document.createElement('img')
            elem.src = args['src'] !== undefined ? args['src'].value : ''
            elem.alt = args['alt'] !== undefined ? args['alt'].value : ''
            elem.style.alignSelf = args['align'] !== undefined ? args['align'].value : 'flex-start'
            elem.style.width = args['width'] !== undefined ? args['width'].value : '100%'

        if(args['hide-sm'] !== undefined) elem.classList.add('hide-sm')

        return elem
    }
}