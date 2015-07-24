package no.utgdev.varsling.db;

import no.utgdev.varsling.domain.Kanal;
import no.utgdev.varsling.domain.KanalMal;
import no.utgdev.varsling.domain.Mal;
import no.utgdev.varsling.utils.Utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static java.time.LocalDateTime.now;
import static java.util.Optional.ofNullable;

public class MockDB implements DB {
    private Map<String, Mal> maler = new HashMap<>();

    public MockDB() {
        upsertMal("1", new Mal("1", "Mal 1", now().minusDays(1)))
                .withMal(new KanalMal(Kanal.NAV, "Dette NAV meldingen 1"))
                .withMal(new KanalMal(Kanal.MAIL, "Dette er mailen 1"));
        upsertMal("2", new Mal("2", "Mal 2", now().minusHours(1)))
                .withMal(new KanalMal(Kanal.NAV, "Dette NAV meldingen 2"))
                .withMal(new KanalMal(Kanal.MAIL, "Dette er mailen 2"));
        upsertMal("3", new Mal("3", "Mal 3", now()))
                .withMal(new KanalMal(Kanal.NAV, "Dette NAV meldingen 3"))
                .withMal(new KanalMal(Kanal.MAIL, "Dette er mailen 3"));
        upsertMal("4", new Mal("4", "Mal 4", now().minusDays(2)));
    }


    @Override
    public ArrayList hentMaler() {
        return new ArrayList<>(maler.values());
    }

    @Override
    public Optional<Mal> hentMal(String id) {
        return ofNullable(maler.get(id));
    }

    @Override
    public Mal upsertMal(String id, Mal mal) {
        maler.put(id, mal);
        return mal;
    }

    @Override
    public void slettMal(String id) {
        maler.remove(id);
    }

    @Override
    public Mal leggTil(Mal mal) {
        String id = Utils.getID();
        mal.withId(id).withOpprettetDato(now());

        upsertMal(id, mal);
        return mal;
    }
}
