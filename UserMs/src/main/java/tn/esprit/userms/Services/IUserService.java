package tn.esprit.userms.Services;

import org.apache.http.auth.InvalidCredentialsException;
import tn.esprit.userms.entities.Role;
import tn.esprit.userms.entities.User;

import java.util.List;

public interface IUserService {
    public User registerUser(User user);

    User loginUser(String firstname, String password) throws InvalidCredentialsException;

    void logoutUser(String username);

    List<User> getAllUsers();

    List<User> getUsersByRole(Role role);

    User getUserById(Long id);

    void banUser(Long id);

    void unbanUser(Long id);
}
