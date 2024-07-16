package tn.esprit.userms.Services;

import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.userms.Repository.UserRepo;
import tn.esprit.userms.entities.Role;
import tn.esprit.userms.entities.User;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceIMP implements IUserService {
    @Autowired
    public UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password
        user.setRole(Role.CANDIDAT); // Set default role (can be customized)
        userRepo.save(user);
        return user;
    }

    @Override
    public User loginUser(String firstname, String password) throws InvalidCredentialsException {
        Optional<User> userOptional = userRepo.findByFirstname(firstname);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user;
            } else {
                throw new InvalidCredentialsException("Invalid username or password");
            }
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }
    @Override
    public void logoutUser(String username) {
        // Implement logout logic (e.g., invalidate session token)
    }

    @Override
    public List<User> getAllUsers() {

        return userRepo.findAll(); // Consider pagination for large datasets
    }

    @Override
    public List<User> getUsersByRole(Role role){
        return userRepo.findByRole(role);
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> userOptional = userRepo.findById(id);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new UsernameNotFoundException("User not found with ID: " + id);
        }
    }

    @Override
    public void banUser(Long id) {
        User user = getUserById(id);
        user.setBanned(true);
        userRepo.save(user);
    }

    @Override
    public void unbanUser(Long id) {
        User user = getUserById(id);
        user.setBanned(false);
        userRepo.save(user);
    }
}
