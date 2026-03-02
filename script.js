document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面切换
    initPageSwitching();
    
    // 初始化统计卡片动画
    initStatCardAnimations();
    
    // 初始化图表动画
    initChartAnimations();
});

function initPageSwitching() {
    const menuItems = document.querySelectorAll('.menu li');
    const pages = document.querySelectorAll('.page');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有菜单项的活动状态
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            
            // 添加当前菜单项的活动状态
            this.classList.add('active');
            
            // 隐藏所有页面
            pages.forEach(page => page.classList.remove('active'));
            
            // 显示对应页面
            const pageId = this.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}

function initStatCardAnimations() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

function initChartAnimations() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    chartBars.forEach((bar, index) => {
        const height = Math.floor(Math.random() * 150) + 50;
        
        setTimeout(() => {
            bar.style.height = '0';
            bar.style.transition = 'height 1s ease';
            
            setTimeout(() => {
                bar.style.height = height + 'px';
            }, 50);
        }, index * 100);
    });
    
    // 初始化趋势图动画
    const trendLines = document.querySelectorAll('.trend-line');
    
    trendLines.forEach((line, index) => {
        const height = Math.floor(Math.random() * 150) + 50;
        
        setTimeout(() => {
            line.style.height = '0';
            line.style.transition = 'height 1s ease';
            
            setTimeout(() => {
                line.style.height = height + 'px';
            }, 50);
        }, index * 100);
    });
}

// 模拟数据加载
function loadMockData() {
    // 模拟统计数据
    const stats = [
        { title: '总项目数', value: 128, trend: '+12%' },
        { title: '总投资金额', value: '2.5亿', trend: '+8%' },
        { title: '本月新增', value: 15, trend: '+20%' },
        { title: '成功率', value: '78%', trend: '-2%' }
    ];
    
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        if (stats[index]) {
            const stat = stats[index];
            card.querySelector('h3').textContent = stat.title;
            card.querySelector('p').textContent = stat.value;
            
            const trendElement = card.querySelector('.trend');
            trendElement.textContent = stat.trend;
            trendElement.classList.add(stat.trend.includes('+') ? 'up' : 'down');
        }
    });
    
    // 模拟最近活动数据
    const activities = [
        { type: '项目申请', project: '智能工厂项目', time: '2024-01-15 14:30', status: 'active' },
        { type: '投资审批', project: '新能源产业园', time: '2024-01-14 10:15', status: 'completed' },
        { type: '项目更新', project: '数字经济园区', time: '2024-01-13 09:45', status: 'pending' },
        { type: '投资方对接', project: '生物医药基地', time: '2024-01-12 16:20', status: 'active' }
    ];
    
    const activityTable = document.querySelector('.activity-table tbody');
    if (activityTable) {
        activityTable.innerHTML = '';
        activities.forEach(activity => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${activity.type}</td>
                <td>${activity.project}</td>
                <td>${activity.time}</td>
                <td><span class="status ${activity.status}">${activity.status === 'active' ? '进行中' : activity.status === 'completed' ? '已完成' : '待处理'}</span></td>
            `;
            activityTable.appendChild(row);
        });
    }
}

// 初始化数据
if (typeof loadMockData === 'function') {
    setTimeout(loadMockData, 1000);
}