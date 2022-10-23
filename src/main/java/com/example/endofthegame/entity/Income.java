package com.example.endofthegame.entity;

import com.example.endofthegame.entity.enumeration.IncomeCategory;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

public record Income(
        IncomeCategory category,
        String currency,
        BigDecimal amount,
        String person,
        ZonedDateTime timestamp
) {
}
