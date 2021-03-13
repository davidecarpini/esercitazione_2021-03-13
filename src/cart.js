const users = [
    {
        id: 0,
        name: 'Pippo'
    },
    {
        id: 1,
        name: 'Pluto'
    },
    {
        id: 2,
        name: 'Aldo'
    },
    {
        id: 3,
        name: 'Giovanni'
    },
    {
        id: 4,
        name: 'Giacomo'
    }
]

const products = [
    {
        id: 0,
        name: 'Libro',
        categoria: 1
    },
    {
        id: 1,
        name: 'Spumante',
        categoria: 0
    },
    {
        id: 2,
        name: 'Maglietta',
        categoria: 2
    },
    {
        id: 3,
        name: 'Scarpe',
        categoria: 2
    },
    {
        id: 4,
        name: 'Chitarra',
        categoria: 3
    },
]

const categories = [ 
    {
        id: 0,
        name: 'Bevande'
    },
    {
        id: 1,
        name: 'Hobby'
    },
    {
        id: 2,
        name: 'Abbigliamento'
    },
    {
        id: 3,
        name: 'Strumenti Musicali'
    },
]

const cart = [
    {
        id: 0,
        user: 0,
        product: 0,
        quantity: 1,
    },
    {
        id: 1,
        user: 0,
        product: 1,
        quantity: 1,
    },
    {
        id: 2,
        user: 0,
        product: 2,
        quantity: 1,
    },
    {
        id: 3,
        user: 1,
        product: 0,
        quantity: 2,
    },
    {
        id: 4,
        user: 1,
        product: 1,
        quantity: 1,
    },
    {
        id: 5,
        user: 1,
        product: 1,
        quantity: 3,
    },
    {
        id: 6,
        user: 3,
        product: 4,
        quantity: 5,
    },
]
export const denormalizedCart = cart.map((element) => {
    let product = products.find(product => product.id === element.product);
    return {
        ...element,
        user: users.find(user => user.id === element.user),
        product: {
            ...product,
            categoria: categories.find(category => product.categoria === category.id)
        }
    };
})

