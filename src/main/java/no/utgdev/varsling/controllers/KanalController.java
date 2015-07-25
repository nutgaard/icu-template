package no.utgdev.varsling.controllers;

import no.utgdev.varsling.domain.Kanal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/kanal")
public class KanalController {

    @RequestMapping(method = RequestMethod.GET)
    public Kanal[] hentAlle() {
        return Kanal.values();
    }

}
