package tn.esprit.applicationms.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.applicationms.Entities.Application;

public interface ApplicationRepository extends JpaRepository<Application,Integer> {
    
}
