package tn.esprit.applicationms.Entities;

import jakarta.persistence.*;
import lombok.*;
import tn.esprit.applicationms.Client.User;

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
    @Lob
    public byte[] CV ;
    @Lob
    public byte[] lettreMotivation ;
    public int score ;
    @Temporal(TemporalType.DATE)
    public Date dateApplication ;
    @Enumerated(EnumType.STRING)
    public Etat etat ;
    @Transient
    private User user ;

}
