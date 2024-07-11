package tn.esprit.applicationms.Services;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.applicationms.Entities.Application;
import tn.esprit.applicationms.Entities.Etat;

import java.io.IOException;
import java.util.List;

public interface IApplicationService {

    Application createApplication(Application application, MultipartFile cvFile, MultipartFile lettreMotivationFile) throws IOException;

    Application getApplicationById(int id);
    List<Application> getAllApplications();
    Application updateApplication(int id, Application application);

    void updateApplicationStatus (int id, Etat newetat);

    void deleteApplication(int id);
}