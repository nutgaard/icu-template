package no.utgdev.varsling.utils;

import java.util.UUID;

public class Utils {
    public static String getID() {
        return UUID.randomUUID().toString();
    }
}
