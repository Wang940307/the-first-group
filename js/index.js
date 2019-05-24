window.onload=function(){
    //
    nav();
    function nav() {
        var navItems = document.querySelectorAll("#wrap .content .content-wrap .main-nav li a");
        var mainContent = document.querySelector("#wrap .content .content-wrap .main-content");
        var contentList = document.querySelectorAll("#wrap .content .content-wrap .main-content .content-list");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].index = i;
            navItems[i].onclick = function () {
                for (var j = 0; j < navItems.length; j++) {
                    navItems[j].className = "";
                }
                navItems[this.index].className = "active";
                mainContent.style.transform = "translateX("+-1200*this.index+"px)";
            }
        }
    };
    //地图
    map();
    function map() {
        var position = new AMap.LngLat(113.837896,22.625891);

        // 创建地图实例
        var map = new AMap.Map("container", {
            zoom: 15,
            center:position,
            resizeEnable: true
        });

        // 点标记显示内容，HTML要素字符串
        var markerContent = '' +
            '<div class="custom-content-marker">' +
            '   <img src="img/定位_03.png">';

        var marker = new AMap.Marker({
            position: position,
            // 将 html 传给 content
            content: markerContent,
            // 以 icon 的 [center bottom] 为原点
            offset: new AMap.Pixel(-13, -30)
        });

        // 将 markers 添加到地图
        map.add(marker);

        // 清除 marker
        function clearMarker() {

            map.remove(marker);
        }
    }
    //轮播
    banner();
    function banner() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay:true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

}