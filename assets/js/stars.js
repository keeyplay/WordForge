function random(min, max) {
  return min + Math.random() * (max - min);
}

class MovingStar {
  constructor() {
    this.star = document.createElement('div');
    this.init();
    this.animate();
  }
  
  init() {
    this.x = random(0, window.innerWidth);
    this.y = random(0, window.innerHeight);
    this.size = random(1, 4);
    this.speed = random(0.1, 0.5); // пикселей за кадр
    this.direction = random(0, Math.PI * 2);
    this.alpha = random(0.3, 0.8);
    
    this.star.style.position = 'fixed';
    this.star.style.left = this.x + 'px';
    this.star.style.top = this.y + 'px';
    this.star.style.width = this.size + 'px';
    this.star.style.height = this.size + 'px';
    this.star.style.backgroundColor = '#ffffff';
    this.star.style.borderRadius = '50%';
    this.star.style.opacity = this.alpha;
    this.star.style.pointerEvents = 'none';
    this.star.style.zIndex = '-1';
    
    document.body.appendChild(this.star);
  }
  
  animate() {
    const move = () => {
      this.x += Math.cos(this.direction) * this.speed;
      this.y += Math.sin(this.direction) * this.speed;
      
      if (this.x < -10) this.x = window.innerWidth + 10;
      if (this.x > window.innerWidth + 10) this.x = -10;
      if (this.y < -10) this.y = window.innerHeight + 10;
      if (this.y > window.innerHeight + 10) this.y = -10;
      
      this.star.style.left = this.x + 'px';
      this.star.style.top = this.y + 'px';
      
      requestAnimationFrame(move);
    };
    
    move();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.style.overflow = 'hidden';
  
  const starsCount = 100;
  const stars = [];
  
  for(let i = 0; i < starsCount; i++) {
    stars.push(new MovingStar());
  }
  
  window.addEventListener('resize', function() {
    stars.forEach(star => {
      if (star.x > window.innerWidth) star.x = window.innerWidth;
      if (star.y > window.innerHeight) star.y = window.innerHeight;
    });
  });
});