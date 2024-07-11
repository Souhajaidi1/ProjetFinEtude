package tn.esprit.offerms.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tn.esprit.offerms.Entities.Offer;
import tn.esprit.offerms.Repositories.OfferRepo;
import tn.esprit.offerms.Services.IOfferService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/apioffer")
@CrossOrigin(origins = "http://localhost:4001")
public class OfferController {
    @Autowired
    private OfferRepo offerRepo ;
    @Autowired
    private IOfferService offerService ;

    @PostMapping("/addoffer")
    public Offer createOffer(@RequestBody Offer offer){
        try {
        return offerService.createOffer(offer);}
        catch (IllegalArgumentException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST , ex.getMessage(), ex);
        }
    }

    @GetMapping("/retrieveofferbyid/{idOffer}")
      public Offer getOfferById(@PathVariable Long idOffer){
        return offerService.getOfferById(idOffer);
    }

    @GetMapping("/retrievealloffer")
     public List<Offer> getAllOffers(){
        return offerService.getAllOffers();
    }

    @PutMapping("/updateoffer/{idOffer}")
     public Offer updateOffer(@PathVariable Long idOffer, @RequestBody Offer offer) {
      try {
       return offerService.updateOffer(idOffer,offer) ;}
      catch (IllegalArgumentException ex){
          throw new ResponseStatusException(HttpStatus.BAD_REQUEST , ex.getMessage(), ex);
      }
    }

    @DeleteMapping("/deleteoffer/{idOffer}")
    public void deleteOffer(@PathVariable Long idOffer){
        offerService.deleteOffer(idOffer);
    }
}
