package tn.esprit.applicationms.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.applicationms.Entities.Application;
import tn.esprit.applicationms.Entities.Etat;
import tn.esprit.applicationms.Services.IApplicationService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private IApplicationService applicationService;

    @PostMapping("/addapp")
    public Application createApplication(@RequestPart("application") String applicationJson,
                                         @RequestPart("cvFile") MultipartFile cvFile,
                                         @RequestPart("lettreMotivationFile") MultipartFile lettreMotivationFile) throws IOException, IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Application application = objectMapper.readValue(applicationJson, Application.class);
        return applicationService.createApplication(application, cvFile, lettreMotivationFile);
    }

    @GetMapping("/getappbyid/{id}")
    public Application getApplicationById(@PathVariable int id) {
        return applicationService.getApplicationById(id);
    }

    @GetMapping("/getallapp")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @PutMapping("/updateapp/{id}")
    public Application updateApplication(@PathVariable int id, @RequestBody Application application) {
        return applicationService.updateApplication(id, application);
    }
    @PutMapping("/updateappstatus/{id}")
   public void updateApplicationStatus(@PathVariable int id , @PathVariable Etat newetat){
        applicationService.updateApplicationStatus(id,newetat);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteApplication(@PathVariable int id) {
        applicationService.deleteApplication(id);
    }
}
