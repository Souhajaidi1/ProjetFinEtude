package tn.esprit.evaluationms.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.evaluationms.Services.IEvaluationService;
import tn.esprit.evaluationms.Entities.Evaluation;
import java.util.List;

@RestController
@RequestMapping("/evaluations")
public class EvaluationController {

    @Autowired
    private IEvaluationService evaluationService;

    @PostMapping("/addev")
    public ResponseEntity<Evaluation> saveEvaluation(@RequestBody Evaluation evaluation) {
        Evaluation savedEvaluation = evaluationService.saveEvaluation(evaluation);
        return new ResponseEntity<>(savedEvaluation, HttpStatus.CREATED);
    }

    @GetMapping("/retrieve/{id}")
    public ResponseEntity<Evaluation> getEvaluationById(@PathVariable("id") int id) {
        Evaluation evaluation = evaluationService.getEvaluationById(id);
        return evaluation != null ? new ResponseEntity<>(evaluation, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/retrieveall")
    public ResponseEntity<List<Evaluation>> getAllEvaluations() {
        List<Evaluation> evaluations = evaluationService.getAllEvaluations();
        return new ResponseEntity<>(evaluations, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable("id") int id) {
        evaluationService.deleteEvaluation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/calculate-score/{id}")
    public ResponseEntity<Double> calculateScore(@PathVariable("id") int id) {
        Evaluation evaluation = evaluationService.getEvaluationById(id);
        if (evaluation != null) {
            double score = evaluationService.calculateScore(evaluation);
            return new ResponseEntity<>(score, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

