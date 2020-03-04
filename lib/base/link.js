export default class CWLink {
  constructor(args, text, clicktype) {
    var elem = document.createElement('a')
        elem.href = args['anchor'] !== undefined ? args['anchor'].value : '#'
        elem.innerHTML = text
        
    if(args['anchor'] === undefined && args['click'] !== undefined) {
      elem.addEventListener(clicktype, e => {
        new Function(args['click'].value)()
      })
    }

    if(args['hide-sm'] !== undefined) elem.classList.add('hide-sm')

    return elem
  }
}