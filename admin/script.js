// 页面切换功能
function initPageNavigation() {
    const menuItems = document.querySelectorAll('.menu li');
    const pages = document.querySelectorAll('.page');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有菜单项的active类
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            
            // 添加当前菜单项的active类
            item.classList.add('active');
            
            // 隐藏所有页面
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // 显示目标页面
            const targetPage = item.getAttribute('data-target');
            document.getElementById(targetPage).classList.add('active');
        });
    });
}

// 模拟数据操作
function initMockDataOperations() {
    // 新增项目按钮
    const addProjectBtn = document.querySelector('#projects .btn-primary');
    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
            alert('新增项目功能开发中...');
        });
    }

    // 新增投资方按钮
    const addInvestorBtn = document.querySelector('#investors .btn-primary');
    if (addInvestorBtn) {
        addInvestorBtn.addEventListener('click', () => {
            alert('新增投资方功能开发中...');
        });
    }

    // 编辑按钮
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('编辑功能开发中...');
        });
    });

    // 删除按钮
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('确定要删除吗？')) {
                alert('删除功能开发中...');
            }
        });
    });

    // 保存设置按钮
    const saveSettingsBtn = document.querySelector('#settings .btn-primary');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            alert('设置已保存');
        });
    }

    // 新增用户按钮
    const addUserBtn = document.querySelectorAll('#settings .btn-primary')[1];
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            alert('新增用户功能开发中...');
        });
    }
}

// 搜索功能
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`搜索: ${searchTerm}`);
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// 过滤功能
function initFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    const filterInputs = document.querySelectorAll('.filter-input');

    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            const selectedValue = select.value;
            console.log('过滤条件变更:', selectedValue);
        });
    });

    filterInputs.forEach(input => {
        input.addEventListener('input', () => {
            const inputValue = input.value.trim();
            console.log('搜索输入:', inputValue);
        });
    });
}

// 图表动画效果
function initChartAnimations() {
    // 柱状图动画
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 300);
    });

    // 折线图动画
    const trendLines = document.querySelectorAll('.trend-line');
    trendLines.forEach(line => {
        const height = line.style.height;
        line.style.height = '0';
        setTimeout(() => {
            line.style.height = height;
        }, 300);
    });

    // 饼图动画
    const pieSlices = document.querySelectorAll('.pie-slice');
    pieSlices.forEach((slice, index) => {
        slice.style.opacity = '0';
        slice.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            slice.style.opacity = '1';
        }, 300 + index * 100);
    });
}

// 响应式处理
function initResponsive() {
    function handleResize() {
        const container = document.querySelector('.container');
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');

        if (window.innerWidth <= 768) {
            container.style.flexDirection = 'column';
            sidebar.style.width = '100%';
            sidebar.style.height = 'auto';
        } else {
            container.style.flexDirection = 'row';
            sidebar.style.width = '250px';
            sidebar.style.height = '100vh';
        }
    }

    // 初始调用
    handleResize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
}

// 初始化所有功能
function init() {
    initPageNavigation();
    initMockDataOperations();
    initSearch();
    initFilters();
    initChartAnimations();
    initResponsive();

    // 添加页面加载动画
    document.addEventListener('DOMContentLoaded', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// 启动应用
init();