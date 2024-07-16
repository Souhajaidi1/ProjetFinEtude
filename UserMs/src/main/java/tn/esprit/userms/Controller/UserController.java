package tn.esprit.userms.Controller;

import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import tn.esprit.userms.Services.IUserService;
import tn.esprit.userms.entities.Role;
import tn.esprit.userms.entities.User;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
@Autowired
 public IUserService userService ;
    @GetMapping("/client")
   // @PreAuthorize("hasRole('realm-user')")
    public String hello(){ return "Hello from spring";}

    @GetMapping("/hello_2")
   // @PreAuthorize("hasRole('realm-admin')")
    public String hello2(){ return "hello Admin";}

    @GetMapping("/auth")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login/{firstname}/{password}")
    public ResponseEntity<User> loginUser(@RequestParam String firstname, @RequestParam String password) {
        try {
            User user = userService.loginUser(firstname, password);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (InvalidCredentialsException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logoutUser(@RequestParam String username) {
        userService.logoutUser(username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("getbyrole/{role}")
    public ResponseEntity<List<User>>getUserByRole(@PathVariable Role role){
        List<User> users1 = userService.getUsersByRole(role);
        return new ResponseEntity<>(users1, HttpStatus.OK);
    }

    @GetMapping("getbyid/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        try {
            User user = userService.getUserById(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/ban/{id}")
    public ResponseEntity<Void> banUser(@PathVariable Long id) {
        userService.banUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/unban/{id}")
    public ResponseEntity<Void> unbanUser(@PathVariable Long id) {
        userService.unbanUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

