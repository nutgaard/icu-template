package no.utgdev.varsling.domain;

public class KanalMal {
    public Kanal kanal;
    public String mal;

    public KanalMal() {
    }

    public KanalMal(Kanal kanal, String mal) {
        this.kanal = kanal;
        this.mal = mal;
    }
}
