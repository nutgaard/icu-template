package no.utgdev.varsling.domain;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

public class Mal {
    public String id;
    public String navn;
    public long opprettet;

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
}
