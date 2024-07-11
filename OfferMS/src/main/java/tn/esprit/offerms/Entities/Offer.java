package tn.esprit.offerms.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Offer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idOffer;
    private String referenceoffer;
    private String position;
    private String contrat;
    private String remuneration;
    private String skills;
    private String nicetohave;
    private String studyingLevel;
    private String experience;
    private Date dateOffer;
    private String formationExigees;
    private String TypeOffer;






}
