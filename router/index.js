import modules from './modules'
import Vue from 'vue'
import store from '../store'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
    routes: [...modules]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.path !='/login'){
	    const sid = to.query.sid || uni.getStorageSync('sid');
		console.log('12', to.query.sid)
		console.log('122', to.query)
	    if (sid){
			uni.setStorageSync('sid', sid);
			store.commit('setSid', sid);
			
			// 在得到企业数据之后进行路由跳转，保证页面中获取到企业数据
			store.dispatch('reqCompanyMsg').then(res=>{
				next()
			})
	      
	    }
	    else {
	      next({ path : '/login'})
	      return
	    }
	  }
	  else{
		  next()
	  }
  
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	
})
export default router;