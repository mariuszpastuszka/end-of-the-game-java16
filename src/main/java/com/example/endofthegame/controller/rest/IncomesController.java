package com.example.endofthegame.controller.rest;

import com.example.endofthegame.service.IncomesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class IncomesController {

    private final IncomesService service;

    public IncomesController(IncomesService service) {
        this.service = service;
    }
}
