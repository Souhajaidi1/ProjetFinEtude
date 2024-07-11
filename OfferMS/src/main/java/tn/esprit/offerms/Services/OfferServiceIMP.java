package tn.esprit.offerms.Services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.offerms.Entities.Offer;
import tn.esprit.offerms.Repositories.OfferRepo;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class OfferServiceIMP implements IOfferService{
    @Autowired
    private OfferRepo offerRepo;
    @Override
    public Offer createOffer(Offer offer) throws IllegalArgumentException {
       /* if(offer.getDateOffer().equals( new Date())){
            throw new IllegalArgumentException("offer date must be equal new date");
        }*/

        if(offer.getExperience() ==null){
            throw new IllegalArgumentException("experience exigees must be specified");
        }
        offer.setDateOffer(new Date());

        return offerRepo.save(offer);
    }

    @Override
    public Offer getOfferById(Long offerId) {
        return offerRepo.findById(Math.toIntExact(offerId)).orElse(null);
    }

    @Override
    public List<Offer> getAllOffers() {
        return offerRepo.findAll();
    }

    @Override
    public Offer updateOffer(Long OfferId, Offer offer) {
        offer.setIdOffer(Math.toIntExact(OfferId));
//        if(offer.getDateOffer().after( new Date()) || offer.getDateOffer().before(new Date())){
//            throw new IllegalArgumentException("offer date must be equal new date");
//        }
//        if(offer.getCompetenceExigees() ==null){
//            throw new IllegalArgumentException("Competences exigees must be specified");
//        }
//        if(offer.getFormationExigees() ==null){
//            throw new IllegalArgumentException("Formation exigees must be specified");
//        }
//        if(offer.getExperience() ==null){
//            throw new IllegalArgumentException("experience exigees must be specified");
//        }
        return offerRepo.save(offer);
    }

    @Override
    public void deleteOffer(Long  OfferId) {
        offerRepo.deleteById(Math.toIntExact(OfferId));

    }
}
