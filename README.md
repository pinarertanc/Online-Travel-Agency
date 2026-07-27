# FollowMySteps
# 🌍 Online Travel Agency Web Application

A dynamic, fully responsive **Online Travel Agency** web application built with HTML5, CSS3, and modern Vanilla JavaScript. This project was created as a final assignment for the JavaScript course.

---

## 🚀 Features

* **Dynamic Tour Pages:** Tour details, itinerary programs, and availability tables are dynamically generated using JavaScript based on URL query parameters (`?id=...`).
* **Live Unsplash API Integration:** High-resolution landscape photos for each tour destination are fetched dynamically from the **Unsplash Search API** and rendered inside an interactive image slider with responsive picture tags.
* **Interactive Price Calculation:** Total costs are calculated in real-time based on selected date options, adult count, and child preferences.
* **Persistent User State:** User selections (date, room, and guest count) are saved in `localStorage` to preserve progress when returning to a tour page.
* **Responsive Layout:** Designed with a Mobile-First approach, featuring custom CSS breakpoints (`styles.css` for mobile, `lg.css` for desktop) and clean table/card transitions.

---

## 🛠️ Tech Stack & Tools

* **Frontend:** HTML5, CSS3 (Flexbox, CSS Grid, Custom Variables), Vanilla JavaScript (ES6+, Async/Await, Fetch API)
* **API:** [Unsplash Developer API](https://unsplash.com/developers) (Search Photos Endpoint)
* **Icons & Fonts:** Custom CSS vector shapes and system fonts

---

## 🔌 API Usage Details

This project utilizes the **Unsplash Search API** (`https://api.unsplash.com/search/photos`) to fetch location-specific photography for each tour destination.

* **Endpoint Used:** `/search/photos`
* **Query Parameters:** `query`, `orientation=landscape`, `order_by=relevant`, `content_filter=high`
* **Implementation:** The `fetchTourPhotos()` function in `turDetay.js` asynchronously fetches 5 high-quality landscape images and updates the `<picture>` element sources dynamically when the user interacts with the gallery slider buttons (`prevBtn` / `nextBtn`).

---
