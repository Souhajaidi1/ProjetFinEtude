package tn.esprit.evaluationms.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.esprit.evaluationms.Client.User;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Interview implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public  int idTest ;
    public Date interviewdate;
    public Date hour ;
    public int duration ;
    public String Modality ;
    public TypeInterview type ;
    private Long userId; // Foreign key to User=evaluator and candidate
    @Transient
    private User user;
    @OneToOne
    public Evaluation evaluation;
}
