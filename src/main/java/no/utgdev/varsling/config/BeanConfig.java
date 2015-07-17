package no.utgdev.varsling.config;

import no.utgdev.varsling.db.DB;
import no.utgdev.varsling.db.MockDB;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public DB db() {
        return new MockDB();
    }

}
