/* 
** ====== [ CROSSWEB FRAMEWORK ] ======
** Version: 0.1.0
*/

import CWCore from './cw/core.js'
import CWArgs from './cw/args.js'

class CrossWeb {
    constructor(params = {}) {
        this.args = new CWArgs({
            theme: '#6600ff',
            design: 'atomic',
            root: 'app',
            routes: {},
            appParams: {},
            click: 'click'
        })

        this.args.change(params)

        this.core = new CWCore(this.args)
    }
}

export default CrossWeb