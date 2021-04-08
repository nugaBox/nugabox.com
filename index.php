<?php
$http_host = $_SERVER['HTTP_HOST'];
$http_url = 'nugabox.com';
if ($http_host != $http_url) {
  if (substr($http_host,0,9) != 'localhost') {
    header("Location: https://".$http_url); 
  }
} 
?>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:image" content="images/meta_image.png">
  <meta property="og:title" content="NUGABOX">
  <meta property="og:type" content="website">
  <meta property="og:description" content="made by NUGA">
  <title>NUGABOX</title>
  <link rel="icon" href="images/favicon.ico">
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" crossorigin="anonymous">
  <link href="css/style.css" rel="stylesheet" type="text/css" crossorigin="anonymous">
  <link href="css/jquery-sakura.css" rel="stylesheet" type="text/css" crossorigin="anonymous">
</head>
<body>
  <div class="middle-box">
    <p><img class="banner" src="images/banner_dark.png" border="0" width="180" alt="nugaBox"></p>
    <div class="profile hover-ani">
      <div class="content">
        <span>NUGA</span>
      </div>
      <div class="profile-cover"></div>
    </div>
    <div class="app-line">
      <div class="app-icons">
        <a class="icon hover-ani" id="cloud" href="https://cloud.nugabox.com" target="_blank"><span>클라우드</span></a>
        <a class="icon hover-ani" id="wiki" href="https://wiki.nugabox.io" target="_blank"><span>개발위키</span></a>
        <a class="icon hover-ani" id="github" href="https://github.com/nugaBox" target="_blank"><span>GitHub</span></a>  
        <a class="icon hover-ani" id="portfolio" href="https://portfolio.nugabox.io" target="_blank"><span>포트폴리오</span></a>
      </div>
      <div class="app-icons">        
        <a class="icon hover-ani" id="cyworld" href="https://dev.nugabox.com/pj/cyworld" target="_blank"><span>미니홈피</span></a>
        <a class="icon hover-ani" id="blog" href="https://blog.nugabox.com" target="_blank"><span>블로그</span></a>  
        <a class="icon hover-ani" id="devlabs" href="https://dev.nugabox.com" target="_blank"><span>DevLabs</span></a>
        <a class="icon hover-ani" id="nuflix" href="https://movie.nugabox.com" target="_blank"><span>누플릭스</span></a>
        <!--<a class="icon icon-none"></a>-->
      </div>
    </div>
    <div class="welcome">
      <a class="arrow-icon">
        <span class="left-bar"></span>
        <span class="right-bar"></span>
      </a>
      <p class="font-eng">"This is only his box.<br>The sheep you asked for is inside."</p>
      <p>Hello World!<span class="insta-gradient"> by @codenuga__</span></p>
    </div>
    <div class="sns-link">            
      <a id="email" href="mailto:ngjang@nugabox.com" data-bs-toggle="tooltip" data-bs-placement="top" title="Email"></a>
      <a id="youtube" href="https://nugabox.com/youtube" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"></a>
      <a id="instagram" href="https://www.instagram.com/codenuga__" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"></a>
    </div>
  </div>
  <!-- JavaScript -->
  <script src="js/jquery.min.js" type="text/javascript" crossorigin="anonymous"></script>
  <script src="js/popper.min.js" type="text/javascript" crossorigin="anonymous"></script>
  <script src="js/bootstrap.min.js" type="text/javascript" crossorigin="anonymous"></script>
  <script src="js/jquery-sakura.js" type="text/javascript" crossorigin="anonymous"></script>
  <script>
    document.oncontextmenu=function(){return false;} // 우클릭 방지
    document.onselectstart=function(){return false;} // 드래그 방지
    document.ondragstart=function(){return false;} // 선택 방지
    $(document).ready(function(){
      $('body').sakura();
      // 부트스트랩 툴팁
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
      // 프로필 클릭 시
      $('.profile-cover').click(function(){
        $('.arrow-icon').toggleClass("open");
        $('.app-line').slideToggle();
      });
      $('.arrow-icon').click(function(){
        $('.arrow-icon').toggleClass("open");
        $('.app-line').slideToggle();
      });
    });    
  </script>
</body>
</html>