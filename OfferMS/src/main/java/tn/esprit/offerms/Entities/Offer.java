package tn.esprit.offerms.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.io.Serializable;
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
    private int referenceoffer;
    private String poste;
    private String lieu;
    private String activite;
    private String mission;
    private String profilPoste;
    private String activitePrincipal;
    private String niveau;
    private String experience;
    private Date dateOffer;
    private int nbPersonnes;
    private String formationExigees;
    private String competenceExigees;
    private String autreExigences;
    private String TypeOffer;






}
