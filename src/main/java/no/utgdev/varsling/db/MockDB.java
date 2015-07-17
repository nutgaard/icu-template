package no.utgdev.varsling.db;

import no.utgdev.varsling.domain.Mal;
import no.utgdev.varsling.utils.Utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static java.util.Optional.ofNullable;

public class MockDB implements DB {
    private Map<String, Mal> maler = new HashMap<>();

    public MockDB() {
        upsertMal("1", new Mal("1"));
        upsertMal("2", new Mal("2"));
        upsertMal("3", new Mal("3"));
        upsertMal("4", new Mal("4"));
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
        mal.id = id;
        upsertMal(id, mal);
        return mal;
    }
}
