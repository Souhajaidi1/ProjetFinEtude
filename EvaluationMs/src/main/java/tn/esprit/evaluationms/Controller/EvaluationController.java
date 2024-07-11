package tn.esprit.evaluationms.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.evaluationms.Entities.Interview;
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

    @DeleteMapping("/deleteev/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable("id") int id) {
        evaluationService.deleteEvaluation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/createtest")
    public ResponseEntity<Interview> saveTest(@RequestBody Interview interview) {
        Interview createdInterview = evaluationService.saveTest(interview);
        return new ResponseEntity<>(createdInterview, HttpStatus.CREATED);
    }

    @GetMapping("/getidtest/{id}")
    public ResponseEntity<Interview> getTestById(@PathVariable int id) {
        Interview interview = evaluationService.getTestById(id);
        if (interview != null) {
            return new ResponseEntity<>(interview, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/alltests")
    public ResponseEntity<List<Interview>> getAllTests() {
        List<Interview> interviews = evaluationService.getAllTests();
        return new ResponseEntity<>(interviews, HttpStatus.OK);
    }
    @PutMapping("/updatetest/{id}")
    public ResponseEntity<Interview> updateTest(@RequestBody Interview interview , @PathVariable int id) {
        Interview updatedInterview = evaluationService.updateTest(id, interview);
        return new ResponseEntity<>(updatedInterview, HttpStatus.CREATED);
    }
    @DeleteMapping("/deletetest/{id}")
    public ResponseEntity<Void> deleteTest(@PathVariable int id) {
        evaluationService.deleteTest(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

  /*  @GetMapping("/calculate-score/{id}")
    public ResponseEntity<Double> calculateScore(@PathVariable("id") int id) {
        Evaluation evaluation = evaluationService.getEvaluationById(id);
        if (evaluation != null) {
            double score = evaluationService.calculateScore(evaluation);
            return new ResponseEntity<>(score, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/


