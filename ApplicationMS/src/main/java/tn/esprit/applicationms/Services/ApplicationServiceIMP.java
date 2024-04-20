package tn.esprit.applicationms.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.applicationms.Entities.Application;
import tn.esprit.applicationms.Repositories.ApplicationRepository;

import java.util.List;

@Service
public class ApplicationServiceIMP implements IApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Override
    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    @Override
    public Application getApplicationById(int id) {
        return applicationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @Override
    public Application updateApplication(int id, Application application) {
        Application existingApplication = applicationRepository.findById(id).orElse(null);
        if (existingApplication != null) {
            application.setRefapplication(existingApplication.getRefapplication());
            return applicationRepository.save(application);
        }
        return null;
    }

    @Override
    public void deleteApplication(int id) {
        applicationRepository.deleteById(id);
    }
}