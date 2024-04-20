package tn.esprit.applicationms.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Application implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int refapplication ;
    public String CV ;
    public String lettreMotivation ;
    public int score ;
    public Date dateApplication ;
    @Enumerated(EnumType.STRING)
    public Etat etat ;
}
