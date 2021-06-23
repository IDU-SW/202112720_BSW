
CREATE TABLE `exhibition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `place` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `xy` text DEFAULT NULL,
  PRIMARY KEY (`id`)
);
 
INSERT INTO `exhibition` VALUES (0,'라이프사진전 : 더 라스트 프린트','life.png','세종문화회관 미술관','20세기의 목격자, 라이프 매거진이 선택한 사진 한 장의 사진이 <라이프>지에 게재되기까지 사진작가들과 편집자, 발행인은 끊임없이 논쟁하고 토론했다. 싸웠다는 표현이 더 맞을지도 모르겠다. 헤밍웨이나 존 스타인백과 같은 작가들이 사 진 설명에 참여하게 될 경우엔 더 복잡한 신경전을 거쳐야 했다.','pb=!1m18!1m12!1m3!1d3162.2866932686243!2d126.97394251546001!3d37.57186623158033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3215f202ef5%3A0x7c50c6616df36776!2z7IS47KKF66y47ZmU7ZqM6rSAIOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1624441976613!5m2!1sko!2skr');
INSERT INTO `exhibition` VALUES (1,'미완의 단면들','per.png','영은미술관','영은미술관은 영은아티스트 프로젝트의 일환으로 진행하는 영은창작스튜디오 11기 정윤영 작가의 <미완의 단면들 展>을 오는 6월12일부터 7월4일까지 4전시장에서 개최한다. 정윤영 작가는 삶과 삶을 돌보는 태도에 대한 관심에서 작업의 영감을 얻는다. 애초에 삶이란 불완전하다.','pb=!1m18!1m12!1m3!1d3169.019506119642!2d127.26673221545666!3d37.413013840662764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cab6271b5df11%3A0x35d80dc4cd84027b!2z7JiB7J2A66-47Iig6rSA!5e0!3m2!1sko!2skr!4v1624424704549!5m2!1sko!2skr');
INSERT INTO `exhibition` VALUES (2,'도서관 속 작업실','lib.png', '의정부미술도서관', '도서관 속 작업실展은 오픈스튜디오 1, 2기 작가들의 결과보고 기획전시다. 1기 박세리, 장유정, 2기 맨디리, 장윤지 총 4명의 작가가 참여하며, 회화, 오브제 등 80여 점의 작품을 선보인다. 전시관은 총 4개의 공간으로 구획되어 있으며, 4명의 작가가 각자 하나의 공간을 온전히 맡아 전시의 집중도를 높였다. ', 'pb=!1m18!1m12!1m3!1d3154.913809612428!2d127.10383561546392!3d37.74516622163515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cc7068d680003%3A0xa848c9c95ca41f98!2z7J2Y7KCV67aAIOuvuOyIoOuPhOyEnOq0gA!5e0!3m2!1sko!2skr!4v1624441894790!5m2!1sko!2skr');
 