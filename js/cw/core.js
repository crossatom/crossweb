// Core class v1

import CWController from './cw/controller.js'
import CWEvents from './cw/events.js'

import CWButton from './cw/elements/button.js'
import CWText   from './cw/elements/text.js'
import CWLink   from './cw/elements/link.js'
import CWImage  from './cw/elements/image.js'

import CWDrop         from './cw/components/drop.js'
import CWGallery      from './cw/components/gallery.js'
import CWSlider       from './cw/components/slider.js'
import CWTimeLine     from './cw/components/timeline.js'
import CWCard         from './cw/components/card.js'
import CWNavBar       from './cw/components/navbar.js'
import CWDialog       from './cw/components/dialog.js'
import CWVList        from './cw/components/vlist.js'
import CWForm         from './cw/components/form.js'
import CWPlayer       from './cw/components/player.js'
import CWCalendar     from './cw/components/calendar.js'
import CWColorPicker  from './cw/components/colorpicker.js'
import CWAccordeon    from './cw/components/accordeon.js'
import CWActionSheet  from './cw/components/actionsheet.js'
import CWChips        from './cw/components/chips.js'
import CWToast        from './cw/components/toast.js'
import CWNotification from './cw/components/notification.js'
import CWPreloader    from './cw/components/preloader.js'
import CWRange        from './cw/components/range.js'
import CWTab          from './cw/components/tab.js'
import CWSwitch       from './cw/components/switch.js'
import CWGrid         from './cw/components/grid.js'

class CWCore {
    constructor(args) {
        // Remove script tags
        document.body.querySelectorAll('script').forEach(tag => tag.remove())

        // Check platform type (desktop/mobile) for fastclick polyfill
        var mobile = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ]
        var detect = mobile.some((tmi) => {
            return navigator.userAgent.match(tmi)
        })

        if(detect) args.change({
            click: 'ontouchstart'
        })
    }
}

export default CWCore