document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const slider = document.querySelector('.theme-toggle-slider');
  
  // 저장된 테마 불러오기
  const savedTheme = localStorage.getItem('theme');
  
  // 테마 적용 함수
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // 슬라이더 이동
    const activeBtn = document.querySelector(`[data-theme="${theme}"]`);
    const position = Array.from(themeToggleBtns).indexOf(activeBtn);
    slider.style.transform = `translateX(${position * 36}px)`;
    
    // 활성화된 버튼 스타일
    themeToggleBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
    
    // 테마 저장
    localStorage.setItem('theme', theme);
  }
  
  // 초기 테마 설정 - light를 기본값으로
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light');
  }
  
  // 버튼 클릭 이벤트
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
    });
  });
  
  // 벚꽃 토글 초기화 및 토글 기능 수정
  let sakuraInstance = null;
  const sakuraBtn = document.querySelector('.sakura-toggle');
  let isSakuraOn = true;  // 초기 상태는 켜짐으로 설정

  // Sakura 초기화 함수
  function initSakura() {
    sakuraInstance = new Sakura('body', {
      colors: [
        {
          gradientColorStart: 'rgba(255, 183, 197, 0.9)',
          gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
          gradientColorDegree: 120,
        }
      ],
      delay: 200,
      maxSize: 14,
      minSize: 10,
      fallSpeed: 1,
    });
  }

  // 초기 상태 설정 (켜짐)
  initSakura();
  sakuraBtn.style.opacity = '1';

  // 토글 버튼 클릭 이벤트
  sakuraBtn.addEventListener('click', () => {
    if (isSakuraOn) {
      if (sakuraInstance) {
        // graceful stop으로 변경
        sakuraInstance.stop(true);
        // 벚꽃 요소들 페이드 아웃 후 제거
        const sakuraElements = document.querySelectorAll('.sakura');
        sakuraElements.forEach(el => {
          el.style.transition = 'opacity 2s';
          el.style.opacity = '0';
        });
        
        // 페이드 아웃 완료 후 요소 제거
        setTimeout(() => {
          sakuraElements.forEach(el => el.remove());
          sakuraInstance = null;
        }, 2000);  // 1초 후 제거
      }
      sakuraBtn.style.opacity = '0.5';
      isSakuraOn = false;
    } else {
      initSakura();
      sakuraBtn.style.opacity = '1';
      isSakuraOn = true;
    }
  });

  // 우클릭, 드래그, 선택 방지
  document.oncontextmenu = function() { return false; }
  document.onselectstart = function() { return false; }
  document.ondragstart = function() { return false; }

  // jQuery 관련 기능들
  $(function() {
    // 부트스트랩 툴팁
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 프로필 클릭 시
    $('.profile-cover').click(function(){
      $('.arrow-icon').toggleClass("open");
      $('.app-line').slideToggle();
    });
    
    $('.arrow-icon').click(function(){
      $('.arrow-icon').toggleClass("open");
      $('.app-line').slideToggle();
    });
    
    // 문구 한영 전환
    var welcome = $('#welcome-text');
    changeKorEng = setInterval(function() {
      if(welcome.hasClass('font-eng')){
        welcome.animate({opacity:0},3000);
        welcome.removeClass('font-eng');
        welcome.addClass('font-han');
        welcome.css('opacity','0').stop().html('"네가 원하는 양은 이 상자 안에 있어."').animate({opacity:1},2000);
      } else {
        welcome.animate({opacity:0},3000);
        welcome.removeClass('font-han');
        welcome.addClass('font-eng');
        welcome.css('opacity','0').stop().html('"This is only his box.<br>The sheep you asked for is inside."').animate({opacity:1},2000);
      }
    }, 7000);
  });
});
