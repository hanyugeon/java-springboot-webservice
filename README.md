# // 21. 07. 19

테스트 코드를 꼭 작성해야 하는 이유 {

    https://galid1.tistory.com/783

}

LomBok(롬복) 이란? 사용시의 장점 {

    https://mangkyu.tistory.com/78

}

알고 넘어갈 것.(쿼리, getMethod? get?) {

    쿼리:

    getMethod:

    get:

}

# // 21. 07. 24

dto, service, controller / entity 클래스에 대한 자세한 내용 {

    https://gmlwjd9405.github.io/2018/12/25/difference-dao-dto-entity.html

}

# // 21. 08. 01

4장 복습 {

    서버 템플릿과 클라이언트 템플릿 : java에서 사용될 때는 서버 템플릿 엔진, js에서는 클라이언트 템플릿 (4장에서 사용한 서버 템플릿 엔진은 mustache)
    
    js/css 선언 위치를 다르게 : mustache를 이용하여 js는 footer에 / css는 header에 선언하여 웹사이트 로딩 속도를 향상시킴.

    js 객체를 이용하여 전역 변수 충돌 문제를 회피 : var index

    mustache가 아니더라도 Thymeleaf나 Free-marker 등의 본인의 기호에 맞춰 복습하는것도 좋다고 한다.
    
}

# // 21.08.03

개인정보 보안 {

    application.oauth.properties와 같은 파일은 중요한 개인정보들이 노출될 수 있으므로 잊지말고 .gitignore에 추가하자.

}

# // 21.08.09

Annotation 기반으로한 개선작업 {

    일반적인 프로그래밍에서 개선이 필요한 나쁜 코드는 가장 대표적으로 같은 코드가 반복되는 부분이다!

    반복 해서 작성한다면 이후에 수정이 필요할 때 모든 부분을 하나씩 찾아가며 수정해야하는 일이 생겨 유지보수성이 떨어진다.

    참고문서 : https://palyoung.tistory.com/72

}

# // 21.08.14

ArgumentResolver 이용하기(본책 195p ~ 200p) {

    ArgumentResolver를 이용하면 어노테이션으로 로그인 세션 정보를 가져올 수 있다.

    참고문서 : 본책(195p ~ 200p)

    참고문서 : https://velog.io/@oyeon/%EC%95%84%EA%B7%9C%EB%A8%BC%ED%8A%B8-%EB%A6%AC%EC%A1%B8%EB%B2%84Argument-Resolver

}

세션 저장소로 톰캣 / 데이터베이스 / 메모리 DB 중 데이터베이스를 사용한 이유? {

    현 상황에 맞게 개발, 설정이 간단하고 사용자가 많은 서비스가 아니기 때문에 비용 절감 까지.

    본 기능은 AWS에서 이 서비스를 배포 할 떄 활용 될것

    지금은 H2기반이기 때문에 어플리케이션 재실행시에 다시 로그인을 반복해야함.

    (세션이 풀림)

}

# // 21.08.16

내가 이 책을 보는 이유? {

    sean : 서버-디비-배포, 풀 싸이클을 경험 할 수 있는 좋은 책

    best practice! : 1.test code, 2.DB, 3.배포
    
    외부자료 : https://coconutstd.github.io/posts/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8%EC%99%80-aws%EB%A1%9C-%ED%98%BC%EC%9E%90-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-%EC%9B%B9%EC%84%9C%EB%B9%84%EC%8A%A4/

}

# // 21.09.03 

무중단 배포 {

    삽질만 몇일째 하는것같다.

    사실 aws EC2서버 쪽에서 문제가 있는것같아 그쪽을 계속 건드렸는데 꼬일대로 꼬인것같다. 망했다.
    (이 모든것을 견디고 실제 서비스를 운영 및 개발하고 있는 모든 현직 개발자분들에게 존경을 표합니다.)
    
    다른것들은(CI,CD 등) 모두 정상적으로 작동하나 서버를 들어가면 연결이 거부되어 접속이 안된다.

    물론 로컬에서는 변경사항에 대한 부분은 정상적으로 반영 된 것들을 확인 하였다.

    건드리다보니 CI쪽에도 문제가 생겨 배포조차 먹통이 되어버렸다...

    
    일단 거두절미하고 이 책에서 무중단 배포는 nginx를 활용한다.

    그 원리는 간단하다. springboot port:8081, 8082로 나누어 신규 배포가 필요할때마다 번갈아가며 nginx를 reload 시킨다.

    이러한 원리로 무중단 배포 시스템을 구현하고 서비스 개발자 및 사용자 모두 질 좋은 서비스를 맛 볼 수 있음을 기대한다.

}

# // 21.09.04

'스브링 부트와 AWS로 혼자 구현하는 웹 서비스' 를 마치며. {

    상당히 오래걸렸다. 처음엔 6주, 늦어도 2달안에 끝내려고했는데 그마저도 못지켰다.
    (존나 게을러빠졌음을 증명한다.)

    하지만 이러한 사이클을 이 시점에 혼자서 경험 할 수 있었음에 정말 감사한다.
    (thanks for SEAN! SEAN! SEAN!)

    이러한 사이클을 한번 경험해보니 뭔가 미래에 내가 포기 하지않고 영감을 받아가며 개발 할 수 있는 분야가 어디일까 생각을 많이 하게 되는 요즘이다.

    그 다음은 눈여겨 보고있는 강좌가 10월초에 열린다고 하니 그전까지 JS와 react의 기초들을 다져 보려고 한다.

    1년정도 남았다. 판교에서 보자. 화이팅.
}