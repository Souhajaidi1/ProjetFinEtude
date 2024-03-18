package tn.esprit.userms.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.io.Serializable;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class User implements Serializable {
    @Id
    public String id_user ;
    public String firstname ;
    public String lastname ;
    public String email ;
    public String telephone ;
    public String nationalite ;
    public String datenaissance ;
    public String lieunaissance ;
    public String Adresse ;



}
