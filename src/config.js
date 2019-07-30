const CONFIG = {
    url:'https://summer.langjie.com/summer',
    pathName:'',
    menus:[
        {
            id:'1',
            text:'朗杰会员凉爽一夏',
            type:'summer',
            pathname:'#/Summer',
            subMenus:[
                {
                    id:'1-1',
                    text:'参与人员管理',
                    subpathname:'/Summer/join'
                },
                {
                    id:'1-2',
                    text:'**子导航二管理',
                    subpathname:'/Summer/nav2'
                }
            ]
        },
        {
            id:'3',
            text:'导航三',
            type:'nav3',
            pathname:'#/Nav3',
            subMenus:[]
        }
    ]
}

export default CONFIG