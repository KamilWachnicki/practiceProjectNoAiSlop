---

# **EPIC 1 — STRONA GŁÓWNA**

---

## **PBI 1.1 - Wyświetlenie layoutu strony głównej z mapą i listą filtrów**

**User story:**
Jako użytkownik
chcę zobaczyć stronę główną z mapą Leaflet i listą filtrów ✅ 
aby łatwo znaleźć osoby lub wydarzenia oraz zobaczyć ich lokalizacje. ✅ 

**Kryteria akceptacji:**

1. Given otwieram stronę główną, When strona się ładuje, Then widzę header, tytuł, mapę Leaflet, listę filtrów i input do wyszukiwania. ✅ 
2. Given brak danych z backendu, When strona się ładuje, Then mapa i lista pokazują placeholdery. ✅ 
3. Given wpisuję tekst w polu wyszukiwania lub wybieram kategorię, When filtr działa, Then lista i mapa aktualizują się dynamicznie. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **PBI 1.2 - Dodanie trzech przycisków nawigacji (Osoby, Wydarzenia, Generator QR)**

**User story:**
Jako użytkownik
chcę kliknąć w element menu na stronie głównej
aby przejść do wybranej podstrony.

**Kryteria akceptacji:**

1. Given widzę trzy przyciski, When kliknę któryś, Then jestem przekierowany do odpowiedniej podstrony. ✅ 
2. Given hover, When najeżdżam, Then przyciski mają efekt wizualny. ✅ 
3. Given nie jestem zalogowany lub jestem zwykłym użytkownikiem, When kliknę Generator QR, Then dostęp jest zablokowany. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 1.3 - Logowanie użytkownika (prymitywne)**

**User story:**
Jako administrator
chcę zalogować się przy użyciu prostego loginu i hasła z JSON
aby mieć dostęp do generatora QR.

**Kryteria akceptacji:**

1. Given wprowadzam login i hasło, When dane są poprawne, Then ustawiana jest cookie z rolą użytkownika. ✅ 
2. Given zalogowany jako admin, Then mogę otworzyć generator QR. ✅ 
3. Given zalogowany jako zwykły użytkownik lub gość, Then generator QR jest niedostępny. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

# **EPIC 2 — OSOBY**

---

## **PBI 2.1 - Stworzenie listy osób (bez wyszukiwarki)**

**User story:**
Jako użytkownik
chcę zobaczyć listę dostępnych osób
aby wybrać konkretną postać.

**Kryteria akceptacji:**

1. Given otwieram podstronę Osoby, Then widzę listę imion z JSON. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 2.2 - Dodanie wyszukiwarki osób**

**User story:**
Jako użytkownik
chcę szukać osób po nazwie
aby szybciej znaleźć właściwą osobę.

**Kryteria akceptacji:**

1. Given wpisuję tekst, When filtr się wykonuje, Then lista aktualizuje się dynamicznie. ✅ 
2. Given brak wyników, Then UI pokazuje „Nic nie znaleziono”.

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 2.3 - Podstrona osoby: wersja podstawowa (zdjęcie + opis)**

**User story:**
Jako odwiedzający
chcę zobaczyć opis osoby i jej zdjęcie
aby dowiedzieć się więcej o bohaterze.

**Kryteria akceptacji:**

1. Given otwieram stronę osoby, Then widzę opis i obraz. ✅ 
2. Given obraz się nie ładuje, Then widzę fallback. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 2.4 - Podstrona osoby: integracja z mapą (Leaflet)**

**User story:**
Jako użytkownik
chcę zobaczyć lokalizację osoby na mapie
aby łatwo znaleźć to miejsce.

**Kryteria akceptacji:**

1. Given strona osoby się ładuje, Then mapa Leaflet wyświetla marker z nazwą osoby. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

# **EPIC 3 — WYDARZENIA**

---

## **PBI 3.1 - Lista wydarzeń (bez mapy)**

**User story:**
Jako użytkownik
chcę zobaczyć listę wydarzeń
aby wiedzieć, co się dzieje w okolicy.

**Kryteria akceptacji:**

1. Given otwieram podstronę wydarzeń, Then widzę listę eventów (nazwa + godzina). ✅

**Priorytet:** Średni
**Szacowanie:** 2 SP

---

## **PBI 3.2 - Podstrona wydarzenia: opis + godzina**

**User story:**
Jako użytkownik
chcę zobaczyć szczegóły wydarzenia
aby zrozumieć, na czym polega aktywność.

**Kryteria akceptacji:**

1. Given klikam wydarzenie, Then otwiera się jego opis. ✅ 
2. Given brak zdjęcia/opisu, Then widzę placeholder. ✅ 

**Priorytet:** Średni
**Szacowanie:** 1 SP

---

## **PBI 3.3 - Mapa wydarzenia (Leaflet)**

**User story:**
Jako uczestnik
chcę zobaczyć lokalizację wydarzenia
aby łatwo tam trafić.

**Kryteria akceptacji:**

1. Given otwieram stronę wydarzenia, Then widzę mapę z markerem. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

# **EPIC 4 — GENERATOR QR**

---

## **PBI 4.1 - Wyświetlenie listy kategorii (tylko dla admina)**

**User story:**
Jako administrator
chcę wybrać kategorię do generowania QR
aby zawęzić listę wyników.

**Kryteria akceptacji:**

1. Given zalogowany jako admin, Then widzę listę kategorii.  ✅ 
2. Given wybiorę kategorię, Then lista elementów zmienia się dynamicznie. ✅ 
3. Given nie jestem adminem, Then nie widzę generatora QR. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 4.2 - Lista elementów po wybraniu kategorii**

**User story:**
Jako administrator
chcę zobaczyć elementy w danej kategorii
aby wybrać właściwy do wygenerowania QR.

**Kryteria akceptacji:**

1. Given wybrałem kategorię, Then widzę listę elementów. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 4.3 - Generowanie kodu QR**

**User story:**
Jako administrator
chcę wygenerować kod QR
aby móc go umieścić na tabliczce.

**Kryteria akceptacji:**

1. Given wybiorę element, Then automatycznie pojawi się kod QR. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **PBI 4.4 - Karta do druku (nazwa + QR)**

**User story:**
Jako użytkownik
chcę wydrukować kartę z QR
aby użyć jej fizycznie.

**Kryteria akceptacji:**

1. Given QR jest wygenerowany, Then karta wyświetla nazwę + QR. ✅ 
2. Given kliknę „drukuj”, Then pojawia się poprawny print-layout. ✅ 

**Priorytet:** Średni
**Szacowanie:** 2 SP

---

# **EPIC 5 — MAPY (LEAFLET)**

---

## **PBI 5.1 - Stworzenie komponentu mapy Leaflet**

**User story:**
Jako developer
chcę mieć gotowy komponent mapy
aby używać go w wielu podstronach i na stronie głównej.

**Kryteria akceptacji:**

1. Given komponent otrzyma współrzędne, Then wyświetla mapę. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---

## **PBI 5.2 - Dodanie obsługi markera**

**User story:**
Jako developer
chcę dodać marker do mapy
aby wskazywać lokalizacje osób i wydarzeń.

**Kryteria akceptacji:**

1. Given podam współrzędne, Then marker pojawia się automatycznie. ✅ 
2. Given kliknę marker, Then tooltip się otwiera. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 2 SP

---

## **PBI 5.3 - Filtracja elementów na mapie**

**User story:**
Jako użytkownik
chcę filtrować elementy na mapie według kategorii i wyszukiwać po nazwie
aby szybko znaleźć interesujące miejsca.

**Kryteria akceptacji:**

1. Given wybieram kategorię (wszystkie, wydarzenia, osoby), Then mapa pokazuje tylko pasujące markery. ✅ 
2. Given wpisuję tekst w wyszukiwarkę, Then lista i mapa aktualizują się dynamicznie. ✅ 

**Priorytet:** Wysoki
**Szacowanie:** 3 SP

---
