package no.utgdev.varsling.domain;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

public class Mal {
    public String id;
    public String navn;
    public long opprettet;
    public List<KanalMal> maler = new ArrayList<>();

    public Mal() {}

    public Mal(String id, String navn, LocalDateTime opprettet) {
        this.id = id;
        this.navn = navn;
        this.opprettet = opprettet.toEpochSecond(ZoneOffset.UTC);
    }

    public Mal withId(String id) {
        this.id = id;
        return this;
    }

    public Mal withOpprettetDato(LocalDateTime now) {
        this.opprettet = now.toEpochSecond(ZoneOffset.UTC);
        return this;
    }


    public Mal withMal(KanalMal kanalMal) {
        this.maler.add(kanalMal);
        return this;
    }
}
