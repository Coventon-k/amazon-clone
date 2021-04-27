import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Syl',
            email: 'sylcoventonkendy@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'user1',
            email: 'user1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ]
    ,
    products: [
        {
            
            name: 'Nile Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10, 
            description: 'high quality product'
        },
        {
            name: 'Lacost Free Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 220,
            countInStock: 20,
            brand: 'Addidas',
            rating: 4.9,
            numReviews: 17, 
            description: 'high quality product'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 20,
            brand: 'Addidas',
            rating: 4.9,
            numReviews: 17, 
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Shirt',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14, 
            description: 'high quality product'
        },
        {
            name: 'Puma slim Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 50,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10, 
            description: 'high quality product'
        },
        {
            name: 'Addidas FIt Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 140,
            countInStock: 100,
            brand: 'Addidas',
            rating: 4.5,
            numReviews: 15, 
            description: 'high quality product'
        },
        
    ]
}

export default data;