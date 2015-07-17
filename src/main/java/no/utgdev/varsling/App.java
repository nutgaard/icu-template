package no.utgdev.varsling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

@SpringBootApplication
@EnableWebMvcSecurity
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
