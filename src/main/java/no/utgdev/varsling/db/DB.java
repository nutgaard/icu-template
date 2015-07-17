package no.utgdev.varsling.db;

import no.utgdev.varsling.domain.Mal;

import java.util.List;
import java.util.Optional;

public interface DB {


    public List<Mal> hentMaler();

    public Optional<Mal> hentMal(String id);

    public Mal upsertMal(String id, Mal mal);

    public void slettMal(String id);

    public Mal leggTil(Mal mal);
}
