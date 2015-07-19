package no.utgdev.varsling.controllers;

import no.utgdev.varsling.db.DB;
import no.utgdev.varsling.domain.Mal;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/mal")
public class MalController {

    @Inject
    private DB db;

    @RequestMapping(method = RequestMethod.GET)
    public List<Mal> hentAlle() {
        return db.hentMaler();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Mal hent(@PathVariable("id") String id) {
        Optional<Mal> mal = db.hentMal(id);

        if (mal.isPresent()) {
            return mal.get();
        } else {
            return null;
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public Mal leggTil(@RequestBody Mal mal) {
        return db.leggTil(mal);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Mal upsert(@PathVariable("id") String id, Mal mal) {
        return db.upsertMal(id, mal);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void slett(@PathVariable("id") String id) {
        db.slettMal(id);
    }


}
