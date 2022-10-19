
export let mockups = {
    'apple': {
        'iphone-12-pro-max': {
            name: 'iPhone 12 Pro Max',
            img: '/imgs/mockups/iphone-12-pro-max_0.webp',
            type: 'phone'
        },
        'iphone-12-pro': {
            name: 'iPhone 12 Pro',
            img: '/imgs/mockups/iphone-12-pro-max_0.webp',
            type: 'phone'
        },
        'iphone-12': {
            name: 'iPhone 12',
            img: '/imgs/mockups/iphone-12_0.webp',
            type: 'phone'
        },
        'iphone-12-mini': {
            name : 'iPhone 12 Mini',
            img: '/imgs/mockups/iphone-12_0.webp',
            type: 'phone'
        },
        'macbook-pro-16-2019': {
            name: 'Macbook Pro 16 2019',
            img: '/imgs/mockups/macbook-pro-16-2019.webp',
            type: 'macbook'
        },
        'macbook-pro-15-2016-touch-bar': {
            name: 'Macbook Pro 15 2016 Touch Bar',
            img: '/imgs/mockups/macbook-pro-15-2016-touch-bar.webp',
            type: 'macbook'
        }
    },
    'google': {
        'pixel5': {
            name: 'Pixel 5',
            test:'pixe1',
            img: "/imgs/mockups/pixel-5.png",
            type: 'phone'
        },
        'pixel-4a-5G': {
            name: 'Pixel 4a (5G)',
            test:'pixe2',
            img: "/imgs/mockups/pixel-4a-5g.webp",
            type: 'phone'
        },
        'pixel-4a': {
            name: 'Pixel 4a',
            test:'pixe3',
            img: "/imgs/mockups/pixel-4a_0.webp",
            type: 'phone'
        },
        'pixel-6':{
            name: 'Pixel 6',
            img:"/imgs/mockups/pixel-4a_0.webp",
            type: 'phone'
        }
    },
    'samsung': {
        'galaxy-s21-ultra': {
            name: 'Galaxy S21 Ultra',
            img: "/imgs/mockups/galaxy-s21-ultra.webp",
            type: 'phone',
            'galaxy-s21-ultras-design' : {
                design : 'S21 TEST',
                dimg :'/imgs/mockups/galaxy-s21-ultra.webp',
                name : 's21',
             }
        },
        "galaxy-s21": {
            name: 'Galaxy S21',
            img: "/imgs/mockups/galaxy-s21.webp",
            type: 'phone'
        }
    }
}

const generateBindData = (brand, type) => {
    return Object.entries(mockups[brand]).reduce((accu , [slug, value]) => {
        if (value.type == type) {
            accu[slug] = value
        }
        return accu
    }, {})
}

export let bindings = {
    'iphone': {
        name: 'iPhone',
        title: 'Skin',
        mockups: {
            brand: 'Apple',
            type: 'phone'
        },
        data: generateBindData('apple', 'phone'),
        img :'/imgs/mockups/iphone-12_0.webp'
    },
    'macbook': {
        name: 'Macbook',
        title: 'Skin',
        mockups: {
            brand: 'apple',
            type: 'macbook'
        },
        data: generateBindData('apple', 'macbook'),
        img :'/imgs/mockups/macbook-pro-15-2016-touch-bar.webp'
    },
    'pixel': {
        name: 'Pixel',
        title: 'Skin',
        mockups: {
            brand: 'google',
            type: 'phone'
        },
        data: generateBindData('google', 'phone'),
        img: '/imgs/mockups/pixel-4a_0.webp'
    },
    'samsung': {
        name: 'Samsung',
        title: 'Skin',
        mockups: {
            brand: 'samsung',
            type: 'phone'
        },
        data: generateBindData('samsung', 'phone'),
        img: '/imgs/mockups/galaxy-s21.webp'
    }
}
