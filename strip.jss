:root {
  --primary: #15546c;
  --dark: #899ea6;
  --light: #ffffff;
  --gray: #bbbbbb;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--dark);
  color: var(--light);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

/* Header Styles */
header {
  background: linear-gradient(to right, #042227, #2f314b);
  padding: 3rem 2rem;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.profile-pic {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid var(--primary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.right h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.right p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.highlight {
  color: var(--primary);
  font-weight: bold;
}

.buttons .btn {
  margin: 0.5rem 1rem 0 0;
  padding: 0.6rem 1.5rem;
  background: none;
  border: 2px solid var(--primary);
  color: var(--light);
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s ease;
}
.btn:hover {
  background: var(--primary);
  color: var(--dark);
}

/* Sections */
section h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

/* Projects */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #1a1a3a;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: 0.3s;
}
.project-card:hover {
  transform: scale(1.05);
}
.project-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

/* Contact */
form input, form textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
}

textarea {
  height: 120px;
}

/* Footer */
footer {
  text-align: center;
  padding: 1.5rem;
  background: #0a0a1a;
  font-size: 0.9rem;
  color: var(--gray);
}