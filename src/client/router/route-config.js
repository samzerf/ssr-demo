import Index from '../pages/Index'
import List from '../pages/List'

export default [
  {
    path: '/index',
    component: Index,
    exact: true //是否精确匹配
  },
  {
    path: '/list',
    component: List,
    exact: true
  }
]