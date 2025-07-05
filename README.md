# 📝 Mini Message Board - [See Live Here](https://message-board-aqtb.onrender.com/)	

A simple and interactive message board built with **Node.js**, **Express**, and **EJS**. Users can view, submit, and explore individual messages in a minimal yet elegant interface.

---

## 🚀 Features

- 🗂️ See all messages on the homepage
- ➕ Add a new message via a form
- 🔍 View full details of each message
- 📱 Responsive and clean design
- 🎨 Sticky header and footer with 100vh layout

---

## 🌐 Technologies Used

- **Node.js**
- **Express**
- **EJS**
- **HTML5 & CSS3**

---

## 📸 UI Overview

### 🔹 Homepage (`/`)

- Displays all submitted messages
- Each message shows:
  - 👤 Username
  - 💬 Message text
  - 🕒 Timestamp
- “Open” link for message details
- Link to submit a new message

### 🔹 New Message (`/new`)

- Form with:
  - Input for author name
  - Textarea for message
  - Submit button
- Sends a `POST` request to `/new`
- Redirects to homepage after submission

### 🔹 Message Detail (`/message/:id`)

- Shows full message with username and time

---

## 🧑‍🎨 Layout & Design

- `header` sticks to the top of the page
- `footer` stays pinned at the bottom
- Entire layout spans full screen height (`100vh`)
- Content scrolls in between, footer never overlaps
- Styled with a modern and minimal approach

---

## Author

- Facebook - [@mainul islam](https://web.facebook.com/mmmuinul.islam/)
- LinkedIn - [@mainul islam](https://www.linkedin.com/in/mainul-islam-nirob/)
- Twitter - [@mainul](https://twitter.com/Mainuli96601040)
- Github - [@Mainul-Islam-Nirob](https://github.com/Mainul-Islam-Nirob)
