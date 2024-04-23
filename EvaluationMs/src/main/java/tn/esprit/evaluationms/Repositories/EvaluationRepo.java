package tn.esprit.evaluationms.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.evaluationms.Entities.Evaluation;

public interface EvaluationRepo extends JpaRepository<Evaluation,Integer> {
}
