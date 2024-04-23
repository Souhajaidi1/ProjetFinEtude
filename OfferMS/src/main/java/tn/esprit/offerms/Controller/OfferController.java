package tn.esprit.offerms.Controller;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.offerms.Entities.Offer;
import tn.esprit.offerms.Repositories.OfferRepo;
import tn.esprit.offerms.Services.IOfferService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/apioffer")
public class OfferController {
    @Autowired
    private OfferRepo offerRepo ;
    @Autowired
    private IOfferService offerService ;

    @PostMapping("/addoffer")
    public Offer createOffer(@RequestBody Offer offer){
        return offerService.createOffer(offer);
    }

    @GetMapping("/retrieveofferbyid/{offerId}")
      public Offer getOfferById(@PathVariable Long offerId){
        return offerService.getOfferById(offerId);
    }

    @GetMapping("/retrievealloffer")
     public List<Offer> getAllOffers(){
        return offerService.getAllOffers();
    }

    @PutMapping("/updateoffer/{OfferId}")
     public Offer updateOffer(@PathVariable Long OfferId, @RequestBody Offer offer) {
       return offerService.updateOffer(OfferId,offer) ;
    }

    @DeleteMapping("/deleteoffer/{OfferId}")
    public void deleteOffer(@PathVariable Long OfferId){
        offerService.deleteOffer(OfferId);
    }
}
