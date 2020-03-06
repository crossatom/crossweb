// Args class v1

class CWArgs {
    constructor(arglist = {}) {
        this.nowArgs = arglist
        this.defArgs = arglist
    }

    default() {
        return this.defArgs
    }

    change(arg) {
        if(!(arg instanceof Object)) throw new Error('CrossWeb: некорректные агрументы')
        if(Object.keys(arg).length === 0) return

        var find = false
        for(var i = 0; i < Object.keys(this.nowArgs).length; i++) {
            for(var n = 0; n < Object.keys(arg).length; n++) {
                if(this.nowArgs[i] == arg[n]) find = true
            }
        }

        if(!find) throw new Error('CrossWeb: Параметр(ы) не найден(ы)')
        else Object.assign(this.nowArgs, arg)
    }

    setDefault(key) {
        var find  = false,
            index = 0
        for(var i = 0; i < Object.keys(this.nowArgs).length; i++) {
            if(key == Object.keys(this.nowArgs)[i]) {
                find = true
                index = i
            }
        }

        if(!find) throw new Error('CrossWeb: Параметр не найден')
        else Object.assign(this.nowArgs, this.defArgs[index])
    }

    getDefault(key) {
        var find  = false,
            index = 0
        for(var i = 0; i < Object.keys(this.nowArgs).length; i++) {
            if(key == Object.keys(this.nowArgs)[i]) {
                find = true
                index = i
            }
        }

        if(!find) throw new Error('CrossWeb: Параметр не найден')
        else return this.defArgs[index]
    }
}

export default CWArgs