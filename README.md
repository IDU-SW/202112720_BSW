# 202112720_배성원

|기능|url|method|
|------|---|---|
|전시 리스트 보기|테스트2|테스트3|
|전시 상세 보기|테스트2|테스트3|
|전시 삭제|테스트2|테스트3|
|전시 수정|테스트2|테스트3|
|전시 삭제|테스트2|테스트3|


### DB
*  `id` int(11) NOT NULL AUTO_INCREMENT,    
*  `title` varchar(50) NOT NULL,    
*  `image` varchar(100) DEFAULT NULL,    
*  `place` varchar(100) DEFAULT NULL,    
*  `content` text DEFAULT NULL,    
*  `xy` text DEFAULT NULL,    
*  PRIMARY KEY (`id`)    


### 전시 리스트 화면
![1](https://user-images.githubusercontent.com/80378226/123109875-91aa0400-d476-11eb-8cc2-b23fa55b2cf0.PNG)



### 전시 상세보기 화면
![2](https://user-images.githubusercontent.com/80378226/123109880-9373c780-d476-11eb-9c80-53519fe57edb.PNG)



### 전시 삭제
![삭제](https://user-images.githubusercontent.com/80378226/123109883-9373c780-d476-11eb-9514-b73352fff1d3.PNG)



### 전시 수정
![수정](https://user-images.githubusercontent.com/80378226/123109887-940c5e00-d476-11eb-9fe9-359c43c5bee3.PNG)



### 전시 추가
![추가](https://user-images.githubusercontent.com/80378226/123109889-940c5e00-d476-11eb-9837-8df78c34ce21.PNG)
