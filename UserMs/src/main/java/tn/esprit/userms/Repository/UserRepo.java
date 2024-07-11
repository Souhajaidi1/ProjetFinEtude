package tn.esprit.userms.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.userms.entities.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Long> {
    Optional<User> findByFirstname(String firstname);
    Optional<User> findByEmail(String email);
}
