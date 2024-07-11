package tn.esprit.evaluationms.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.evaluationms.Entities.Interview;

public interface InterviewRepo extends JpaRepository<Interview,Integer> {
}
