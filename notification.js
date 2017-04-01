let Notification = window.Notification || window.mozNotification || window.webkitNotification;

Notification.requestPermission((status) => console.log(status));

function notice() {
    let notice = new Notification('Alvin', { body: 'Hello World', tag: 'start' });
    notice.addEventListener('show', () => console.log('show notice'));
    notice.addEventListener('click', () => console.log('click notice'));
    notice.addEventListener('close', () => console.log('close notice'));
    notice.addEventListener('error', () => console.log('notice error'));
}

setTimeout(notice, 5000);
