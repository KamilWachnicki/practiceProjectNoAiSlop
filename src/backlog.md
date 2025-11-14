Poniżej masz **poprawiony, profesjonalny backlog**, przerobiony według zasad z Twojego PDF-a (user stories, kryteria akceptacji, jasne tytuły, wartość biznesowa).
Możesz to od razu wkleić do swojego backlogu w Jira / Linear / Notion.

---

# **BACKLOG (WERSJA POPRAWIONA)**

---

## **1. Strona Główna - nawigacja**

**User story:**
Jako użytkownik portalu
chcę mieć dostępną stronę główną z wyraźną nawigacją
aby szybko przechodzić do sekcji osób, wydarzeń oraz generatora QR.

**Kryteria akceptacji:**

1. Given jestem na stronie głównej, When strona się załaduje, Then widzę trzy sekcje: „Osoby”, „Wydarzenia”, „Generator QR”.
2. Given kliknę w jedną z sekcji, When wybiorę „Osoby/Wydarzenia/Generator QR”, Then jestem przekierowany na odpowiednią podstronę.

**Wartość biznesowa:** Jasna struktura portalu, poprawa UX.
**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **2. Lista popularnych osób**

**User story:**
Jako odwiedzający
chcę zobaczyć listę osób z możliwością wyszukiwania
aby szybko odnaleźć daną postać i przejść do jej strony.

**Kryteria akceptacji:**

1. Given jestem na stronie „Osoby”, When wpiszę tekst w wyszukiwarkę, Then lista filtruje się na podstawie nazwy osoby.
2. Given kliknę na osobę z listy, When otworzę jej szczegóły, Then wyświetla się dedykowana podstrona osoby.

**Wartość biznesowa:** Ułatwienie przeglądania i wyszukiwania informacji.
**Priorytet:** Wysoki
**Szacowanie:** 5 SP

---

## **3. Podstrona osoby**

**User story:**
Jako użytkownik
chcę wyświetlić stronę konkretnej osoby
aby poznać jej historię oraz lokalizację dedykowanej ławki.

**Zakres funkcjonalny:**
• zdjęcie osoby
• opis / biografia
• mapa z zaznaczoną ławką

**Kryteria akceptacji:**

1. Given otwieram stronę osoby, When strona się załaduje, Then widzę zdjęcie, opis i mapę.
2. Given mapa Leaflet jest aktywna, When marker zostanie wyświetlony, Then pokazuje dokładną lokalizację ławki.

**Wartość biznesowa:** Zwiększenie atrakcyjności projektu jako lokalnego przewodnika.
**Priorytet:** Wysoki
**Szacowanie:** 5–8 SP

---

## **4. Lista wydarzeń**

**User story:**
Jako mieszkaniec lub turysta
chcę zobaczyć listę nadchodzących wydarzeń
aby zaplanować udział w inicjatywach lokalnych.

**Zakres:**
• lokalizacja
• godzina
• opis aktywności
• mapa miejsca wydarzenia

**Kryteria akceptacji:**

1. Given otwieram listę wydarzeń, When strona się załaduje, Then widzę wszystkie wydarzenia w formie listy.
2. Given kliknę konkretne wydarzenie, When strona wydarzenia się otworzy, Then widzę opis, godzinę i aktywną mapę z markerem lokalizacji.

**Wartość biznesowa:** Promocja lokalnych inicjatyw, zwiększenie zaangażowania odwiedzających.
**Priorytet:** Średni/Wysoki
**Szacowanie:** 5 SP

---

## **5. Generator QR – wybór kategorii**

**User story:**
Jako osoba administrująca tablicami/ławkami
chcę wygenerować gotowy do druku kod QR
aby szybko tworzyć i dodawać oznaczenia na tabliczki.

**Zakres:**
• wybór kategorii (osoby / wydarzenia / inna)
• wyświetlenie listy elementów z wybranej kategorii
• automatyczne generowanie karty + QR

**Kryteria akceptacji:**

1. Given jestem w generatorze, When wybiorę kategorię, Then lista elementów dynamicznie się aktualizuje.
2. Given kliknę wybrany element, When system wygeneruje kartę, Then widzę nazwę elementu i poprawny kod QR.
3. Given chcę wydrukować kartę, When otworzę podgląd/druk, Then karta jest prawidłowo sformatowana.

**Wartość biznesowa:** Automatyzacja tworzenia tabliczek informacyjnych.
**Priorytet:** Wysoki
**Szacowanie:** 5–8 SP

---

## **6. Integracja map (Leaflet)**

**User story:**
Jako użytkownik
chcę zobaczyć dokładne lokalizacje ławek i wydarzeń na mapie
aby łatwo odnaleźć miejsca w terenie.

**Kryteria akceptacji:**

1. Given mapa jest załadowana, When dane lokalizacji są dostępne, Then wyświetlany jest marker na mapie.
2. Given kliknę marker, When pojawi się opis, Then widzę informacje o osobie/wydarzeniu.
3. Given mapa jest osadzona na wszystkich stronach wydarzeń/osób, Then działa identycznie jak w pozostałych częściach systemu.

**Wartość biznesowa:** Ułatwienie użytkownikom fizycznego odnajdywania miejsc.
**Priorytet:** Wysoki
**Szacowanie:** 3 SP
