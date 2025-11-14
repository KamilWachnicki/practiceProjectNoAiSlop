---

# **EPIC 1 — STRONA GŁÓWNA**

---

## **PBI 1.1 – Wyświetlenie podstawowego layoutu strony głównej**

**User story:**
Jako użytkownik
chcę zobaczyć stronę główną z podstawowym układem
aby wiedzieć, gdzie zaczyna się nawigacja.

**Kryteria akceptacji:**

1. Given otwieram stronę główną, When strona się załaduje, Then widzę header, tytuł i sekcje.
2. Given brak danych z backendu, When strona się ładuje, Then UI prezentuje placeholdery.

**Priorytet:** Wysoki
**Szacowanie:** 1 SP
**Notatki:** podstawowy HTML/CSS, brak logiki.

---

## **PBI 1.2 – Dodanie trzech przycisków nawigacji (Osoby, Wydarzenia, Generator QR)**

**User story:**
Jako użytkownik
chcę kliknąć w element menu na stronie głównej
aby przejść do wybranej sekcji.

**Kryteria akceptacji:**

1. Given widzę trzy przyciski, When kliknę któryś, Then jestem przekierowany do odpowiedniej podstrony.
2. Given hover, When najeżdżam, Then przyciski mają efekt wizualny.

**Priorytet:** Wysoki
**Szacowanie:** 1 SP
**Notatki:** prosta nawigacja.

---

---

# **EPIC 2 — OSOBY**

---

## **PBI 2.1 – Stworzenie listy osób (bez wyszukiwarki)**

**User story:**
Jako użytkownik
chcę zobaczyć listę dostępnych osób
aby wybrać konkretną postać.

**Kryteria akceptacji:**

1. Given otwieram podstronę Osoby, Then widzę listę imion z bazy danych.
2. Given brak osób, Then widzę komunikat „Brak danych”.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP
**Notatki:** pobieranie JSON / API.

---

## **PBI 2.2 – Dodanie wyszukiwarki osób**

**User story:**
Jako użytkownik
chcę szukać osób po nazwie
aby szybciej znaleźć właściwą osobę.

**Kryteria akceptacji:**

1. Given wpisuję tekst, When filtr się wykonuje, Then lista aktualizuje się dynamicznie.
2. Given brak wyników, Then UI pokazuje „Nic nie znaleziono”.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 2.3 – Podstrona osoby: wersja podstawowa (zdjęcie + opis)**

**User story:**
Jako odwiedzający
chcę zobaczyć opis osoby i jej zdjęcie
aby dowiedzieć się więcej o bohaterze.

**Kryteria akceptacji:**

1. Given otwieram stronę osoby, Then widzę opis i obraz.
2. Given obraz się nie ładuje, Then widzę fallback.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 2.4 – Podstrona osoby: integracja z mapą (Leaflet)**

**User story:**
Jako użytkownik
chcę zobaczyć lokalizację ławki na mapie
aby łatwo znaleźć to miejsce.

**Kryteria akceptacji:**

1. Given strona osoby się ładuje, Then mapa Leaflet wyświetla marker.
2. Given klikam w marker, Then widzę tooltip z nazwą osoby.

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

**Notatki:** integracja mapy jako osobny komponent.

---

---

# **EPIC 3 — WYDARZENIA**

---

## **PBI 3.1 – Lista wydarzeń (bez mapy)**

**User story:**
Jako użytkownik
chcę zobaczyć listę wydarzeń
aby wiedzieć, co się dzieje w okolicy.

**Kryteria akceptacji:**

1. Given otwieram podstronę wydarzeń, Then widzę listę eventów (nazwa + godzina).
2. Given brak wydarzeń, Then pojawia się info „Brak wydarzeń”.

**Priorytet:** Średni
**Szacowanie:** 2 SP

---

## **PBI 3.2 – Podstrona wydarzenia: opis + godzina**

**User story:**
Jako użytkownik
chcę zobaczyć szczegóły wydarzenia
aby zrozumieć, na czym polega aktywność.

**Kryteria akceptacji:**

1. Given klikam wydarzenie, Then otwiera się jego opis.
2. Given brak zdjęcia/opisu, Then widzę placeholder.

**Priorytet:** Średni
**Szacowanie:** 1 SP

---

## **PBI 3.3 – Mapa wydarzenia (Leaflet)**

**User story:**
Jako uczestnik
chcę zobaczyć lokalizację wydarzenia
aby łatwo tam trafić.

**Kryteria akceptacji:**

1. Given otwieram stronę wydarzenia, Then widzę mapę z markerem.
2. Given marker jest kliknięty, Then wyświetla się nazwa/typ wydarzenia.

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

---

# **EPIC 4 — GENERATOR QR**

---

## **PBI 4.1 – Wyświetlenie listy kategorii**

**User story:**
Jako użytkownik
chcę wybrać kategorię do generowania QR
aby zawęzić listę wyników.

**Kryteria akceptacji:**

1. Given strona generatora jest otwarta, Then widzę listę kategorii.
2. Given wybiorę kategorię, Then lista elementów zmienia się dynamicznie.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 4.2 – Lista elementów po wybraniu kategorii**

**User story:**
Jako użytkownik
chcę zobaczyć elementy w danej kategorii
aby wybrać właściwy do wygenerowania QR.

**Kryteria akceptacji:**

1. Given wybrałem kategorię, Then widzę listę elementów.
2. Given elementy nie istnieją, Then UI pokazuje „Brak danych”.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 4.3 – Generowanie kodu QR**

**User story:**
Jako administrator
chcę wygenerować kod QR
aby móc go umieścić na tabliczce.

**Kryteria akceptacji:**

1. Given wybiorę element, Then automatycznie pojawi się kod QR.
2. Given QR nie może wygenerować się, Then pojawia się komunikat błędu.

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **PBI 4.4 – Karta do druku (nazwa + QR)**

**User story:**
Jako użytkownik
chcę wydrukować kartę z QR
aby użyć jej fizycznie.

**Kryteria akceptacji:**

1. Given QR jest wygenerowany, Then karta wyświetla nazwę + QR.
2. Given kliknę „drukuj”, Then pojawia się poprawny print-layout.

**Priorytet:** Średni
**Szacowanie:** 2 SP

---

---

# **EPIC 5 — MAPY (LEAFLET)**

---

## **PBI 5.1 – Stworzenie komponentu mapy Leaflet**

**User story:**
Jako developer
chcę mieć gotowy komponent mapy
aby używać go w wielu podstronach.

**Kryteria akceptacji:**

1. Given komponent otrzyma współrzędne, Then wyświetla mapę.
2. Given brak współrzędnych, Then wyświetlany jest placeholder.

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **PBI 5.2 – Dodanie obsługi markera**

**User story:**
Jako developer
chcę dodać marker do mapy
aby wskazywać lokalizacje osób i wydarzeń.

**Kryteria akceptacji:**

1. Given podam współrzędne, Then marker pojawia się automatycznie.
2. Given kliknę marker, Then tooltip się otwiera.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---
