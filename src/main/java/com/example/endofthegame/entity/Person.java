package com.example.endofthegame.entity;

public record Person(
        String name,
        String surname,
        int age,
        Address address
) {
}
