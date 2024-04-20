package tn.esprit.userms.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user")
   // @PreAuthorize("hasRole('realm-user')")
    public String hello(){ return "Hello from Spring";}

    @GetMapping("/hello_2")
   // @PreAuthorize("hasRole('realm-admin')")
    public String hello2(){ return "hello Admin";}

    @GetMapping("/auth")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }
}
