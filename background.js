// background.js

function showPage(pageId) {
    // 隱藏所有頁面
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });
    // 顯示特定頁面
    document.getElementById(pageId).classList.remove('hidden');

    // 如果页面是 Summary，将所有展开按钮文本设置为 open 并隐藏详细信息文本
    if (pageId === 'page1') {
        document.querySelectorAll('.expandButton').forEach(function(button) {
            button.textContent = "(open)";
        });
        document.querySelectorAll('.expandedDetail').forEach(function(detail) {
            detail.classList.add('hidden');
        });
    }
}

document.getElementById('toPage1').addEventListener('click', function() {
    showPage('page1');
});

document.getElementById('toPage2').addEventListener('click', function() {
    showPage('page2');
});

document.getElementById('toPage3').addEventListener('click', function() {
    showPage('page3');
});

document.getElementById('toPage4').addEventListener('click', function() {
    showPage('page4');
});

document.querySelectorAll('.backButton').forEach(function(button) {
    button.addEventListener('click', function() {
        showPage('page1');

        // 将所有展开按钮文本设置为 open 并隐藏详细信息文本
        document.querySelectorAll('.expandButton').forEach(function(button) {
            button.textContent = "(open)";
        });
        document.querySelectorAll('.expandedDetail').forEach(function(detail) {
            detail.classList.add('hidden');
        });
    });
});

// 展開和收縮詳細資訊
document.querySelectorAll('.expandButton').forEach(function(button) {
    button.addEventListener('click', function() {
        var detail = this.parentElement.nextElementSibling;
        detail.classList.toggle('hidden');
        
        // 切換按鈕文本
        if (this.textContent.includes('open')) {
            this.textContent = this.textContent.replace('open', 'close');
        } else {
            this.textContent = this.textContent.replace('close', 'open');
        }
    });
});
var originalButtonTexts = {};

document.querySelectorAll('.expandButton').forEach(function(button) {
    originalButtonTexts[button.id] = button.textContent;
});

document.querySelectorAll('.backButton').forEach(function(button) {
    button.addEventListener('click', function() {
        showPage('page1');

        // 将所有展开按钮文本恢复为原始文本，并隐藏详细信息文本
        document.querySelectorAll('.expandButton').forEach(function(button) {
            button.textContent = originalButtonTexts[button.id];
        });
        document.querySelectorAll('.expandedDetail').forEach(function(detail) {
            detail.classList.add('hidden');
        });
    });
});
document.getElementById('toPage1').addEventListener('click', function() {
    showPage('page1');

    // 将所有展开按钮文本恢复为原始文本，并隐藏详细信息文本
    document.querySelectorAll('.expandButton').forEach(function(button) {
        button.textContent = originalButtonTexts[button.id];
    });
    document.querySelectorAll('.expandedDetail').forEach(function(detail) {
        detail.classList.add('hidden');
    });
});
