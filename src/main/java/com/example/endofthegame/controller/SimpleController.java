package com.example.endofthegame.controller;


import com.example.endofthegame.entity.Address;
import com.example.endofthegame.entity.Person;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SimpleController {

    private static final Logger log = LoggerFactory.getLogger(SimpleController.class);

    @GetMapping("/me")
    public Person showMyData() {
        log.info("showing my personal data");

        return new Person("Mariusz", "Pastuszka", 18,
                new Address("Poland", "Warsaw"));
    }
}
