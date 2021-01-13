module.exports = {
    configureWebpack: {
        resovle: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'pages': '@/pages',
                'storage': '@/storage',
                'util': '@/util'
            }
        },
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api':{
                target:'https://www.imooc.com',
                //将主机的点设置为 原点
                changeOrigin: true,
                //将api路径设置为空
                pathRewrite: {
                    '/api':''
                }
            }
        }
    }
}