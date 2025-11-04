"use client";

import { useRef, useEffect } from 'react';

const DotShaderAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isActive = true;

    const setup = () => {
      if (!canvas) return; // Add null check for canvas
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const mouse = {
        x: width / 2,
        y: height / 2,
        radius: 80,
      };
      
      const style = getComputedStyle(document.documentElement);
      const dotColor = style.getPropertyValue('--dot-color').trim();
      const dotInteractionColor = style.getPropertyValue('--dot-interaction-color').trim();

      class Dot {
        x: number;
        y: number;
        size: number;
        baseX: number;
        baseY: number;
        density: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.size = 1;
          this.baseX = this.x;
          this.baseY = this.y;
          this.density = Math.random() * 30 + 1;
        }

        draw() {
          if (!ctx) return;
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          ctx.fillStyle = distance < mouse.radius ? dotInteractionColor : dotColor;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        update() {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;

          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;

          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
            this.size = 2;
          } else {
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
            this.size = 1;
          }
        }
      }

      let dotArray: Dot[] = [];
      const gap = 20;

      function init() {
        if (!canvas) return; // Add null check for canvas
        dotArray = [];
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        for (let y = 0; y < height; y += gap) {
          for (let x = 0; x < width; x += gap) {
            dotArray.push(new Dot(x, y));
          }
        }
      }

      function animate() {
        if (!isActive || !ctx) return;
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < dotArray.length; i++) {
          dotArray[i].update();
          dotArray[i].draw();
        }
        animationFrameId = requestAnimationFrame(animate);
      }
      
      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      };

      const handleResize = () => {
        init();
      };
      
      init();
      animate();

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    };

    const cleanupEventListeners = setup();

    return () => {
      isActive = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if(cleanupEventListeners){
          cleanupEventListeners();
      }
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
};

export default DotShaderAnimation;
