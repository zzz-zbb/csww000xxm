document.addEventListener('DOMContentLoaded', function() {
    initBottomNavigation();
    initQuickAccess();
    initFilterTabs();
    initSearch();
    initMenuItems();
});

function initBottomNavigation() {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const pages = document.querySelectorAll('.main-content .page');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            pages.forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById(target);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}

function initQuickAccess() {
    const quickItems = document.querySelectorAll('.quick-item');
    quickItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-page');
            if (target) {
                const navItem = document.querySelector(`.bottom-nav .nav-item[data-target="${target}"]`);
                if (navItem) {
                    navItem.click();
                }
            }
        });
    });
}

function initFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`搜索: ${searchTerm}`);
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function initMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span:nth-child(2)').textContent;
            alert(`点击了: ${text}`);
        });
    });
}

function initAddButtons() {
    const addBtns = document.querySelectorAll('.add-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('新增功能开发中...');
        });
    });
}

function initActionButtons() {
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('查看详情功能开发中...');
        });
    });
}

initAddButtons();
initActionButtons();