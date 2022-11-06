package ee.secretagency.endofthegame.dto;

import lombok.Builder;

import java.time.ZonedDateTime;

@Builder
public record ErrorInfo(
        ZonedDateTime timestamp,
        int status,
        String error,
        String message,
        String path
) {
}
