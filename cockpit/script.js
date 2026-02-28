document.addEventListener('DOMContentLoaded', function() {
    initCurrentTime();
    initRefreshButton();
    initMapPoints();
    initAnimations();
});

function initCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    
    function updateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        timeElement.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

function initRefreshButton() {
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
            
            alert('数据刷新成功！');
        });
    }
}

function initMapPoints() {
    const mapPoints = document.querySelectorAll('.map-point');
    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            const label = this.querySelector('.point-label').textContent;
            alert(`项目详情：${label}`);
        });
    });
}

function initAnimations() {
    const trendBars = document.querySelectorAll('.trend-bar');
    trendBars.forEach((bar, index) => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 300 + index * 100);
    });

    const rankingBars = document.querySelectorAll('.ranking-bar .bar-fill');
    rankingBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500 + index * 100);
    });

    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach((fill, index) => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 700 + index * 100);
    });

    const statusBars = document.querySelectorAll('.status-bar .bar-fill');
    statusBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 900 + index * 100);
    });
}

function addLiveFeedItem(title, desc) {
    const liveFeed = document.querySelector('.live-feed');
    if (liveFeed) {
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const feedItem = document.createElement('div');
        feedItem.className = 'feed-item';
        feedItem.innerHTML = `
            <div class="feed-time">${time}</div>
            <div class="feed-content">
                <div class="feed-title">${title}</div>
                <div class="feed-desc">${desc}</div>
            </div>
        `;
        
        liveFeed.insertBefore(feedItem, liveFeed.firstChild);
        
        if (liveFeed.children.length > 10) {
            liveFeed.removeChild(liveFeed.lastChild);
        }
    }
}

function updateMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(metric => {
        const currentValue = parseFloat(metric.textContent.replace(/[^0-9.]/g, ''));
        const newValue = currentValue * (1 + (Math.random() - 0.5) * 0.1);
        
        if (metric.textContent.includes('亿')) {
            metric.textContent = `¥${newValue.toFixed(1)}亿`;
        } else {
            metric.textContent = Math.round(newValue);
        }
    });
}

setInterval(() => {
    const randomEvents = [
        { title: '新项目签约', desc: '投资金额¥1.5亿' },
        { title: '项目审批通过', desc: '投资金额¥2.3亿' },
        { title: '投资方入驻', desc: '新增投资方1家' },
        { title: '项目启动', desc: '投资金额¥1.8亿' }
    ];
    
    const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    addLiveFeedItem(randomEvent.title, randomEvent.desc);
}, 30000);

setInterval(updateMetrics, 60000);