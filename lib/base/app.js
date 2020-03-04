export default class CWApp {
    constructor(args) {
        document.body.style.background = args['background'] !== undefined ? args['background'].value : '#fff'
        document.body.style.textAlign = args['align-items'] !== undefined ? args['align-items'].value : 'flex-start'
        document.body.style.justifyContent = args['justify-content'] !== undefined ? args['justify-content'].value : 'flex-start'
        document.body.style.flexDirection = args['direction'] !== undefined ? args['direction'].value : 'column'
    }
} 