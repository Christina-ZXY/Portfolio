import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];

    const cols = 10; // 横向分10列
    const rows = 6;  // 纵向分6行
    const marginPercent = 5; // 屏幕边缘留5%空白

    for (let i = 0; i < numberOfStars; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;

      // 每个格子宽高
      const cellWidth = (100 - 2 * marginPercent) / cols;
      const cellHeight = (100 - 2 * marginPercent) / rows;

      // 在格子内部随机偏移
      const x = marginPercent + col * cellWidth + Math.random() * cellWidth;
      const y = marginPercent + row * cellHeight + Math.random() * cellHeight;

      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x,
        y,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 1,
        animationDelay: `${Math.random() * 4}s`,
      });
    }

    setStars(newStars);
  };


  const generateMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 10; i++) {
      newMeteors.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }
    setMeteors(newMeteors);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isDark) {
        generateStars();
      } else {
        generateMeteors();
      }
    };

    // 先生成对应的元素
    if (isDark) {
      generateStars();
      setMeteors([]); // 切到夜晚，清空流星
    } else {
      generateMeteors();
      setStars([]); // 切到白天，清空星星
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDark]);


  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode(); // 初次
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDark ? (
        stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.3)",
            }}
          />
        ))
      ) : (
        meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor"
            style={{
              position: "absolute",
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              width: "100px",
              height: "2px",
              background: "linear-gradient(90deg, white, transparent)",
              transform: "rotate(45deg)",
              animation: `meteor-fall 1s linear ${meteor.delay}s infinite`,
            }}
          />
        ))
      )}
    </div>
  );
};
