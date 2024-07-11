package tn.esprit.userms.Services;

import org.apache.http.auth.InvalidCredentialsException;
import tn.esprit.userms.entities.User;

import java.util.List;

public interface IUserService {
    public User registerUser(User user);

    User loginUser(String firstname, String password) throws InvalidCredentialsException;

    void logoutUser(String username);

    List<User> getAllUsers();

    User getUserById(Long id);

    void banUser(Long id);

    void unbanUser(Long id);
}
