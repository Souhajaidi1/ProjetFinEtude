package tn.esprit.userms.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apiuser")
public class UserController {

    @GetMapping
    @PreAuthorize("hasRole('app_user')")
    public String hello(){ return "Hello from Spring";}

    @GetMapping("/hello_2")
    @PreAuthorize("hasRole('app_admin')")
    public String hello2(){ return "hello Admin";}
}
