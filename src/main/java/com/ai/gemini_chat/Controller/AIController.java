package com.ai.gemini_chat.Controller;

import com.ai.gemini_chat.Service.QnAService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna")
public class AIController {

    private final QnAService qnaService;

    @PostMapping("/ask")
    public ResponseEntity<Mono<String>> askQuestion(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        return ResponseEntity.ok(qnaService.getAnswer(question));

    }
}
