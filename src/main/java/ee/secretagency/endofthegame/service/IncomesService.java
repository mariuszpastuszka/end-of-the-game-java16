package ee.secretagency.endofthegame.service;

import ee.secretagency.endofthegame.entity.Income;
import ee.secretagency.endofthegame.repository.IncomesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class IncomesService {

    private final IncomesRepository repository;

    public IncomesService(IncomesRepository repository) {
        this.repository = repository;
    }

    public List<Income> readAllIncomes() {
//        List<Income> result = repository.findAll();
        var incomesFromDb = repository.findAll();

        log.info("incomes from datasource: {}", incomesFromDb);
        return incomesFromDb;
    }
}
