package tn.esprit.userms.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.userms.entities.User;

public interface UserRepo extends JpaRepository<User,String> {
}
