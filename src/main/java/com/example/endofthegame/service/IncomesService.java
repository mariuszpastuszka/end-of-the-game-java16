package com.example.endofthegame.service;

import com.example.endofthegame.repository.IncomesRepository;
import org.springframework.stereotype.Service;

@Service
public class IncomesService {

    private final IncomesRepository repository;

    public IncomesService(IncomesRepository repository) {
        this.repository = repository;
    }
}
