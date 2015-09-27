module.exports = {
    block: 'page',
    styles: [
        'index.css'
    ],
    title: 'Основы bem-xjst — бем-ориентированного декларативного шаблонизатора',
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'user',
                    mix: [
                        { block: 'header', elem: 'user' }
                    ],
                    image: 'https://avatars.mds.yandex.net/get-yapic/20706/227052871-15966762/islands-middle',
                    content: 'vitkarpov'
                },
                {
                    block: 'logo',
                    mix: [
                        { block: 'header', elem: 'logo' }
                    ]
                },
                {
                    block: 'menu',
                    mix: [
                        { block: 'header', elem: 'menu' }
                    ],
                    items: [
                        { title: 'Яндекс.Диск', url: 'http://disk.yandex.ru' },
                        { title: 'Яндекс.Карты', url: 'http://maps.yandex.ru' },
                        { title: 'Яндекс.Маркет', url: 'http://market.yandex.ru' }
                    ]
                }
            ]
        }
    ]
}
