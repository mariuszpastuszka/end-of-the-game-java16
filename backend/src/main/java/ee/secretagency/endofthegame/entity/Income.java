package ee.secretagency.endofthegame.entity;

import ee.secretagency.endofthegame.entity.enumeration.IncomeCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.ZonedDateTime;

@Entity
@Table(name = "INCOMES")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Income {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Enumerated(EnumType.STRING)
    @NotNull
    IncomeCategory category;

    @NotNull
    @Size(min = 3)
    String currency;

    @NotNull
    @Positive
    BigDecimal amount;

    String person;
    ZonedDateTime timestamp;
    ZonedDateTime creationTimestamp;
    ZonedDateTime updateTimestamp;

    // TODO: handle creation timestamp during updating record at db
    @PrePersist
    private void initCreationTimestamp() {
        creationTimestamp = ZonedDateTime.now();
    }

    @PreUpdate
    private void setCurrentUpdateTimestamp() {
        updateTimestamp = ZonedDateTime.now();
    }
}