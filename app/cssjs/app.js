import {
    header,
    filter,
    slider,
    swiper,
    popup
} from './components'
header();
filter();
swiper()
slider()
popup()

// подгрузка скрипта относительно шаблона
if (typeof pageName !== 'undefined') {
    try {
        require(`./pages/${pageName}`);
    } catch(e) {
        if (e.message.indexOf('Cannot find module') < 0) {
            console.error(e);
        }
    }
}


