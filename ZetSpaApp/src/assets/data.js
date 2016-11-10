var menus = [
    {
        href: '#/main/dashboard',
        caption: '主页',
        icon: 'ti-home',
        isActive: false
    },
    {
        href: '#/main/user',
        caption: '用户信息',
        icon: 'ti-user',
        isActive: false
    },
    {
        href: '#/main/customer',
        caption: '会员管理',
        icon: 'ti-id-badge',
        isActive: false
    },
    {
        href: '#/main/commodity',
        caption: '商品管理',
        icon: 'ti-bag',
        isActive: false
    },
    {
        href: '#/main/technician',
        caption: '技师管理',
        icon: 'ti-stamp',
        isActive: false
    },
    {
        href: '#/main/finnance',
        caption: '财务管理',
        icon: 'ti-wallet',
        isActive: false
    },
    {
        href: '#/main/business',
        caption: '营业查询',
        icon: 'ti-stats-up',
        isActive: false
    }
]

var buttons = [
    {
        className: 'dropdown',
        caption: '通知',
        icon: 'ti-bell',
        dropMenus: [
            {
                caption: 'Notification 1',
            },
            {
                caption: 'Notification 2',
            }
        ]
    }, {
        caption: '设置',
        icon: 'ti-settings'
    }
]


export {
    menus, buttons
} 