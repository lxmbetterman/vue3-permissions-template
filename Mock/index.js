// 引入mockjs
import Mock from 'mockjs'
Mock.setup({
  timeout: '100-500' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

// 使用mockjs模拟数据 RegExp('/dev-api/login' + '.*')
Mock.mock(RegExp('/dev-api/login' + '.*'), {
  'token': 'my-token'
})

Mock.mock(RegExp('/dev-api/list' + '.*'), {
  'list': ['a', 'b', 'c']
})
Mock.mock(RegExp('/dev-api/userinfo' + '.*'), {
  'userName': 'laixueming',
  'userAllowedPathName': ['AsycDic', 'AsycAbout', 'AsycDic2', 'AsycAbout2', 'SystemManage', 'MenuList',
    // 可视化部分
    'Visualization', 'X6', 'x6Vue'
  ]
})

