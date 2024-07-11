package tn.esprit.userms.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id_user ;
    public String firstname ;
    public String lastname ;
    private String password ;
    private String email ;
    public String telephone ;
    public String nationalite ;
    public String datenaissance ;
    public String lieunaissance ;
    public String Adresse ;
    private Role role ;
    private boolean banned = false;



}
