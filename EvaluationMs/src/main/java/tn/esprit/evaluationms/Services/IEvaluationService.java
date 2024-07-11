package tn.esprit.evaluationms.Services;
import tn.esprit.evaluationms.Entities.Evaluation;
import tn.esprit.evaluationms.Entities.Interview;

import java.util.List;

public interface IEvaluationService {
    Evaluation saveEvaluation(Evaluation evaluation);
    Evaluation getEvaluationById(int id);
    List<Evaluation> getAllEvaluations();
    void deleteEvaluation(int id);
   // double calculateScore(Evaluation evaluation);
    Interview saveTest(Interview interview);
    Interview getTestById(int id);
    List<Interview> getAllTests();
    void deleteTest(int id);
}

