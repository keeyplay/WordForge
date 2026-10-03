function getRandomCount(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);