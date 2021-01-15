import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  status: 0,
  data: {
    // 随机生成数字 |数字区间
    'id|1000-10000': 0,
    // 随机生成姓名@name英文名，@cname中文名
    username: '@cname',
    email: '@email',
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000
  }
})
