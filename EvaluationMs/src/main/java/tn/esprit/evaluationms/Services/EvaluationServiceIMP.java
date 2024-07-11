package tn.esprit.evaluationms.Services;
import tn.esprit.evaluationms.Client.User;
import tn.esprit.evaluationms.Client.UserClient;
import tn.esprit.evaluationms.Entities.Evaluation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.evaluationms.Entities.Interview;
import tn.esprit.evaluationms.Repositories.EvaluationRepo;
import tn.esprit.evaluationms.Repositories.InterviewRepo;

import java.util.List;

@Service
public class EvaluationServiceIMP implements IEvaluationService {

    @Autowired
    private EvaluationRepo evaluationRepository;
    @Autowired
    public InterviewRepo interviewRepo;
    @Autowired
     private UserClient userClient;
    @Override
    public Evaluation saveEvaluation(Evaluation evaluation) {

        return evaluationRepository.save(evaluation);
    }

    @Override
    public Evaluation getEvaluationById(int id) {

        return evaluationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Evaluation> getAllEvaluations() {

        return evaluationRepository.findAll();
    }

    @Override
    public void deleteEvaluation(int id) {

        evaluationRepository.deleteById(id);
    }

    @Override
    public Interview saveTest(Interview interview) {
        return interviewRepo.save(interview);
    }

    @Override
    public Interview getTestById(int id) {
        Interview interview = interviewRepo.findById(id).orElseThrow(() -> new RuntimeException("Interview not found"));
        User user = userClient.getUserById(interview.getUserId());
        interview.setUser(user);
        return interview;
    }

    @Override
    public List<Interview> getAllTests() {
        return interviewRepo.findAll();
    }

    @Override
    public void deleteTest(int id) {
        interviewRepo.deleteById(id);
    }

   /* @Override
        public double calculateScore(Evaluation evaluation) {
            double score = 0.0;
            // Supposez que vous avez différents critères avec des poids associés
            double poidsRemarque = 0.3;
            double poidsAvis = 0.4;
            double poidsResultat = 0.3;

            // Appliquez les poids aux critères et ajoutez-les au score
            score += evaluation.getRemarque().length() * poidsRemarque;
            score += evaluation.getAvisEvaluateur().length() * poidsAvis;
            score += evaluation.getResultat().length() * poidsResultat;

            return score;
        }*/


}

