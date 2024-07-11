package tn.esprit.evaluationms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

@EnableFeignClients
@SpringBootApplication

public class EvaluationMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EvaluationMsApplication.class, args);
    }

}
