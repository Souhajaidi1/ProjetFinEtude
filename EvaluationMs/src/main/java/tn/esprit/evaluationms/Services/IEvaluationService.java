package tn.esprit.evaluationms.Services;
import tn.esprit.evaluationms.Entities.Evaluation;

import java.util.List;

public interface IEvaluationService {
    Evaluation saveEvaluation(Evaluation evaluation);
    Evaluation getEvaluationById(int id);
    List<Evaluation> getAllEvaluations();
    void deleteEvaluation(int id);
    double calculateScore(Evaluation evaluation);
}

