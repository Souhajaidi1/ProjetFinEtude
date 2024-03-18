package tn.esprit.offerms.Services;

import tn.esprit.offerms.Entities.Offer;

import java.util.List;

public interface IOfferService {

    Offer createOffer(Offer offer);
    Offer getOfferById(Long offerId);
    List<Offer> getAllOffers();
    Offer updateOffer(Long OfferId, Offer offer);
    void deleteOffer(Long OfferId);
}
