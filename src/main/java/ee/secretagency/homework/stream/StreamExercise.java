package ee.secretagency.homework.stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExercise {

    public static void main(String[] args) {
        List<String> strings = new ArrayList<>();
        strings.add("one");
        var oldWayOfCreatingStringList = Arrays.asList("one", "two");
//        oldWayOfCreatingStringList.add("three");
        var persons = List.of(
                new Person("mariusz", "p", 39, 100),
                new Person("max", "www", 259, 230),
                new Person("olaf", "o.", 29, 150),
                new Person("igor", "pawlowski", 19, 180));

        // make a collection with just names - loops approach
        List<String> justNames = new ArrayList<>();
        for (var person : persons) {
            justNames.add(person.name());
        }
        System.out.println("loops - just names: " + justNames);

        // make a collection with names of people who are older than 30 years
        List<String> justNamesOfOlderPersons = new ArrayList<>();
        for (var person : persons) {
            if (person.age() > 30) {
                justNamesOfOlderPersons.add(person.name());
            }
        }
        System.out.println("loops - just names of older persons: " + justNamesOfOlderPersons);

        System.out.println("now streams");
        var namesWithStream = persons.stream()
                .map(person -> person.name())
//                .toList() // since java 16th
                .collect(Collectors.toList());

        System.out.println("streams - just names: " + namesWithStream);

        var olderPersonsFilteredWithStream = persons.stream()
                .filter(person -> person.age() > 31)
                .map(person -> person.name())
                .toList();
        System.out.println("stream - older persons: " + olderPersonsFilteredWithStream);

        persons.stream()
                .filter(person -> person.age() < 30)
                .map(person -> person.height())
                .forEach(height -> System.out.println("person height: " + height));

        persons.stream()
                .filter(person -> {
                    System.out.println("checking person: " + person);
                    return person.age() < 30;
                })
                .map(person -> {
                    System.out.println("mapping to names %s -> %s".formatted(person, person.name()));
                    return person.name();
                })
                .toList();
    }
}
