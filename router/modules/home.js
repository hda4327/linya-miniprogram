const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/home/Home',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'home',
        meta: {
	        showTopTab: true
	    },
    },
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/about/About',
      name: 'about',
        meta: {
	        title: '关于我们',
	    },
    },
	
]
export default home