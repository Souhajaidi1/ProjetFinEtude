package tn.esprit.applicationms.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.applicationms.Entities.Application;
import tn.esprit.applicationms.Entities.Etat;
import tn.esprit.applicationms.Repositories.ApplicationRepository;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;


@Service
public class ApplicationServiceIMP implements IApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;


   /* public byte[] convertPDFToByteArray(File pdfFile) throws IOException {
        try (FileInputStream fis = new FileInputStream(pdfFile)) {
            byte[] bytes = new byte[(int) pdfFile.length()];
            fis.read(bytes);
            return bytes;
        }
    }
    public File convertByteArrayToPDF(byte[] bytes, String fileName) throws IOException {
        File pdfFile = new File(fileName);
        try (FileOutputStream fos = new FileOutputStream(pdfFile)) {
            fos.write(bytes);
        }
        return pdfFile;
    }*/

    @Override
    public Application createApplication(Application application, MultipartFile cvFile, MultipartFile lettreMotivationFile) throws IOException {
        if (cvFile != null && !cvFile.isEmpty() && cvFile.getContentType().contains("pdf")) {
            application.setCV(cvFile.getBytes());
        }
        if (lettreMotivationFile != null && !lettreMotivationFile.isEmpty() && lettreMotivationFile.getContentType().contains("pdf")) {
            application.setLettreMotivation(lettreMotivationFile.getBytes());
        }
        return applicationRepository.save(application);
    }

    @Override
    public Application getApplicationById(int id)  {

        Application app = applicationRepository.findById(id).orElse(null);
        if (app != null) {
            // Consider a separate method to retrieve CV and motivation letter as PDFs if needed
            return app;
        } else {
            // Handle case where application is not found
            return null;
        }
    }

    @Override
    public List<Application> getAllApplications() {

        List<Application> applications = applicationRepository.findAll();
        return applications;
    }

    @Override
    public Application updateApplication(int id, Application application) {
        return null;
    }

    /* @Override
     public Application updateApplication(int id, Application application) throws IOException {
         Application existingApplication = applicationRepository.findById(id).orElse(null);
         if (existingApplication != null) {
             application.setRefapplication(existingApplication.getRefapplication());
             application.setCV(convertPDFToByteArray(cvFile)); // Assuming cvFile is a valid File object
             application.setLettreMotivation(convertPDFToByteArray(lettreMotivationFile)); // Assuming lettreMotivationFile is a valid File object
         }
         return applicationRepository.save(application);
     }*/
    @Override
    public void updateApplicationStatus (int id , Etat newetat){
        if (newetat != null) {
            Application application = applicationRepository.findById(id).orElse(null);
            if (application != null) {
                application.setEtat(newetat);
                applicationRepository.save(application);
            } else {
            throw new IllegalArgumentException( "application status cannot be null.");
        }
    } }
    @Override
    public void deleteApplication(int id) {
        applicationRepository.deleteById(id);
    }
}