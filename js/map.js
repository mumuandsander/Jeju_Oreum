var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.359990, 126.520000),
    level: 9 // 확대레벨
};

var map = new kakao.maps.Map(container, options);


// https://apis.map.kakao.com/web/sample/multipleMarkerImage/
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.359990, 126.520000);
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);