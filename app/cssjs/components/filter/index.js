const list = document.querySelector('.filter__inner'),
    items = document.querySelectorAll('.gallery__item'),
    listItems = document.querySelectorAll('.filter__item')

const filter = () => {
    list.addEventListener('click', e => {
        const targetId = e.target.dataset.id
        const target = e.target
        if(target.classList.contains('filter__item')){
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }
        switch (targetId) {
            case 'all':
                getItems('gallery__item')
                break
            case 'atmosphere':
                getItems(targetId)
                break
            case 'culture':
                getItems(targetId)
                break
            case 'extreme':
                getItems(targetId)
                break
            case 'people':
                getItems(targetId)
                break
        }
    })
}

filter()

const getItems = (className) => {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
