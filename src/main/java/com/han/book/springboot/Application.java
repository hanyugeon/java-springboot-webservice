package com.han.book.springboot;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

// @EnableJpaAuditing가 삭제됨 // JPA Auditing (비)활성화
@SpringBootApplication
public class Application {      // 앞으로 만들 프로젝트의 '메인 클래스'
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
