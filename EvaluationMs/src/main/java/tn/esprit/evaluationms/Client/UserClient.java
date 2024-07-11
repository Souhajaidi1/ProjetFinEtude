package tn.esprit.evaluationms.Client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "UserMS", url = "http://localhost:8083")
public interface UserClient {
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id);
}
