package tn.esprit.offerms.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.offerms.Entities.Offer;
import tn.esprit.offerms.Repositories.OfferRepo;

import java.util.List;

@Service
public class OfferServiceIMP implements IOfferService{
    @Autowired
    private OfferRepo offerRepo;
    @Override
    public Offer createOffer(Offer offer) {
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
        return offerRepo.save(offer);
    }

    @Override
    public void deleteOffer(Long OfferId) {
        offerRepo.deleteById(Math.toIntExact(OfferId));

    }
}
