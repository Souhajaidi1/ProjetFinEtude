package tn.esprit.evaluationms.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Evaluation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_evaluation;
    //need to map id user=candidate from user
    //public int id_candidate ;
    private String remarque;
    private String resultat;
    private int softskills;
    private int hardskills;
    @OneToOne
    public Interview interview;

}
