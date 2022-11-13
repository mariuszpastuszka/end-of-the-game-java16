package ee.secretagency.endofthegame.controller.rest;

import ee.secretagency.endofthegame.dto.ErrorInfo;
import ee.secretagency.endofthegame.exception.IncomeNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.time.ZonedDateTime;

@RestControllerAdvice
@Slf4j
public class IncomeAdvisor {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(IncomeNotFoundException.class)
    public ErrorInfo handleIncomeNotFoundException(IncomeNotFoundException exc) {
        log.debug("handling not found incomes");
        log.warn("income not found!", exc);
        return ErrorInfo.builder()
                .status(404)
                .error("income not found")
                .message(exc.getMessage())
                .timestamp(ZonedDateTime.now())
                .path(ServletUriComponentsBuilder.fromCurrentRequest().toUriString())
                //TODO: extract only path
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorInfo handleValidationException(MethodArgumentNotValidException exc) {
        log.warn("validation exception", exc);

        return ErrorInfo.builder()
                .status(400)
                .error("validation failed")
                .message(exc.getMessage())
                .timestamp(ZonedDateTime.now())
                .path(ServletUriComponentsBuilder.fromCurrentRequest().toUriString())
                .build();
    }
}

// log levels
// error
// warn
// info - default one
// debug
// trace

