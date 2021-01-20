import Mock from 'mockjs'
Mock.mock('/api/products', require('./products.json'))
Mock.mock('/api/slides', require('./slideList.json'))
