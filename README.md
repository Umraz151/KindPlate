# KindPlate

KindPlate is a simple food-sharing website that connects:

1. People who have extra food to share.
2. People who need or want to find available food nearby.

The current version is a frontend prototype with sample meal listings and a local-only sharing flow.

## Features

- Landing page explaining the food-sharing mission.
- Browse available meals.
- Search meals by name, area, or dietary category.
- Filter meals by:
  - All food
  - Vegetarian
  - Vegan
  - Baked goods
- Submit a new meal using the **Share a meal** form.
- Automatically show a matching stock food image on each new meal listing. Common food names such as biryani, rice, dal, curry, pizza, pasta, salad, bread, cake, and dessert have dedicated images; other meals use their selected category image.
- Use a real stock food photo as the KindPlate browser and header icon.
- Use a real food photograph in the hero section so the purpose of the website is immediately clear.
- Ask donors for a mobile number.
- Let a recipient book a meal and call the donor to arrange pickup.
- Let a recipient cancel a booking, making the meal available again.
- Display the newly submitted meal immediately in the meal list.
- Responsive layout for desktop and mobile screens.
- No database or backend required for the current prototype.

## Project files

```text
kindplate/
├── index.html    # Main page structure and content
├── styles.css    # Layout, colors, responsive styles, and illustrations
├── script.js     # Search, filtering, meal rendering, and form behavior
├── kindplate-icon.svg # Brand and browser-tab icon
└── README.md     # Project documentation
```

## Requirements

You need one of these options:

- Python 3
- Node.js
- Any local static web server

No package installation is required.

## Run locally with Python

Open PowerShell in the project folder:

```powershell
cd C:\Users\Umraz_Ansari\hacathon
python -m http.server 5173
```

Then open this URL in your browser:

<http://localhost:5173>

To stop the server, press `Ctrl+C` in the PowerShell window.

## Run locally with Node.js

If you have Node.js installed, you can use the `serve` package through `npx`:

```powershell
cd C:\Users\Umraz_Ansari\hacathon
npx serve .
```

Open the URL shown in the terminal. It is usually:

<http://localhost:3000>

## How to use the website

### Find food

1. Open the **Find food near you** section.
2. Search by meal name, area, or dietary type.
3. Use the filter dropdown to select a category.
4. Review the available portions and pickup time.

### Share food

1. Click **Share a meal**.
2. Enter the food description.
3. Select the food category.
4. Add the pickup area.
5. Select the time until which the food is available.
6. Optionally add allergen or container information.
7. Click **Post this meal**.

The new meal appears immediately with a matching stock image selected automatically.

## Important prototype limitation

This is currently a frontend-only demo:

- Meal data is stored in browser memory.
- New listings disappear when the page is refreshed.
- Stock images are loaded from Unsplash and require an internet connection.
- The phone numbers in the sample listings are demo numbers. A production app should protect contact details behind authentication and a confirmed booking.
- There is no user account or authentication system.
- There is no real messaging or pickup coordination.
- There is no database or persistent API.

## Suggested next steps

For a production version, add:

1. A backend API for meals and users.
2. A database such as PostgreSQL, MySQL, or Cosmos DB.
3. User registration and login.
4. Location-based search and map support.
5. Messaging between donors and recipients.
6. Report, moderation, and food-safety features.
7. Persistent image uploads for meal photos.
8. Deployment to a hosting service.

## Useful India-focused features to add

1. **OTP login with Indian mobile numbers** so donors and recipients have verified accounts.
2. **WhatsApp contact option** alongside calling, with consent from both users.
3. **PIN-code and map search** so people can find meals within walking distance.
4. **Languages** such as Hindi, Kannada, Tamil, Telugu, Marathi, Bengali, and Malayalam.
5. **Food safety fields** for cooked time, best-before time, allergens, vegetarian/non-vegetarian status, and storage instructions.
6. **Pickup slots and booking limits** so donors are not overwhelmed and recipients know when to arrive.
7. **NGO and community partner accounts** for shelters, temples, gurudwaras, student groups, and local volunteers.
8. **Delivery volunteer mode** for people who can safely transport food nearby.
9. **Trust and safety tools** including user ratings, report buttons, verified organizations, and booking history.
10. **Low-data experience** with compressed images, quick-loading pages, and a Progressive Web App for unreliable connections.
11. **UPI donation support** for optional packaging, transport, or NGO contributions without charging for the food.
12. **Impact dashboard** showing meals rescued, food waste avoided, and communities served.

## Design

The interface uses:

- A warm cream background.
- Green accents for trust and community.
- Orange accents for warmth and action.
- Playfair Display for headings.
- DM Sans for body text and controls.
