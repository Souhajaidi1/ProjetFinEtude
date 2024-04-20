package tn.esprit.applicationms.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.applicationms.Entities.Application;
import tn.esprit.applicationms.Services.IApplicationService;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private IApplicationService applicationService;

    @PostMapping("/addapp")
    public Application createApplication(@RequestBody Application application) {
        return applicationService.createApplication(application);
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

    @DeleteMapping("/delete/{id}")
    public void deleteApplication(@PathVariable int id) {
        applicationService.deleteApplication(id);
    }
}
