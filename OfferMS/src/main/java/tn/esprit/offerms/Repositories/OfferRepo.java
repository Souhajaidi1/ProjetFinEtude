package tn.esprit.offerms.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.offerms.Entities.Offer;

public interface OfferRepo extends JpaRepository<Offer,Integer> {
}
