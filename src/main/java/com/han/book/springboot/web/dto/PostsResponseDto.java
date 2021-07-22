package com.han.book.springboot.web.dto;

import com.han.book.springboot.domain.posts.Posts;
import lombok.Getter;

@Getter
public class PostsResponseDto { // api를 만들기 위한 3가지 클래스 중 1 (Dto)

    private Long id;
    private String title;
    private String content;
    private String author;

    public PostsResponseDto(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
    }
}
