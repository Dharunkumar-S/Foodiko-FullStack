package com.example.foodiko.service;


import com.example.foodiko.model.User;
import com.example.foodiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailOtpService {
    @Autowired
    JavaMailSender mailSender;
    @Autowired
    UserRepository uRepo;

    public EmailOtpService() {
    }

    public EmailOtpService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendMessage(String to, String subject, String text){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("foodikoservice@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        this.mailSender.send(message);
    }

    public User emailExist(String email){
        return uRepo.findByemail(email);
    }
}
