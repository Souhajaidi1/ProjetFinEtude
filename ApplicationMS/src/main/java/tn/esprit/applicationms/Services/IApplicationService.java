package tn.esprit.applicationms.Services;

import tn.esprit.applicationms.Entities.Application;

import java.util.List;

public interface IApplicationService {
    Application createApplication(Application application);
    Application getApplicationById(int id);
    List<Application> getAllApplications();
    Application updateApplication(int id, Application application);
    void deleteApplication(int id);
}