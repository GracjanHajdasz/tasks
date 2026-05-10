# Tasks

Fullstackowa aplikacja do zarządzania zadaniami stworzona jako projekt rekrutacyjny. Umożliwia tworzenie, edytowanie, usuwanie oraz organizowanie zadań w trzech kolumnach statusu: **Do zrobienia**, **W trakcie** i **Gotowe**.

---

## Technologie

**Frontend**

- React (Vite)
- Axios
- react-icons

**Backend**

- PHP / Laravel
- SQLite
- RESTful API

---

## Funkcjonalności

- Widok zadań podzielonych według statusu w stylu tablicy Kanban
- Dodawanie nowych zadań z tytułem i opisem
- Edycja istniejących zadań (tytuł, opis, status)
- Usuwanie zadań
- Zmiana statusu zadania bezpośrednio z karty — aktualizacja natychmiastowa przez API

---

## Struktura projektu

```
tasks/
├── backend/    # Laravel REST API
└── frontend/   # Aplikacja React
```

---

## Uruchomienie

### Wymagania

- PHP >= 8.1
- Composer
- Node.js >= 18

---

### Backend

```bash
cd backend
composer install
cp .env.example .env
```

Ustaw połączenie z bazą danych SQLite w pliku `.env`:

```env
DB_CONNECTION=sqlite
```

Następnie uruchom:

```bash
php artisan key:generate
php artisan migrate
php artisan serve
```

API będzie dostępne pod adresem `http://localhost:8000`.

---

### Frontend

```bash
cd frontend
npm install
```

Utwórz plik `.env`:

```env
VITE_API_URL=http://localhost:8000
```

Następnie uruchom:

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

---

## Endpointy API

| Metoda | Endpoint          | Opis                       |
| ------ | ----------------- | -------------------------- |
| GET    | `/api/tasks`      | Pobierz wszystkie zadania  |
| POST   | `/api/tasks`      | Utwórz nowe zadanie        |
| PUT    | `/api/tasks/{id}` | Zaktualizuj zadanie        |
| PATCH  | `/api/tasks/{id}` | Zaktualizuj status zadania |
| DELETE | `/api/tasks/{id}` | Usuń zadanie               |

## Uruchomienie testów

```bash
php artisan test
```
