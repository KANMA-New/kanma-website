"use server";

export async function submitContactForm(formData: FormData) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJrYW5tYS1hZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MzE1NDYwNCwiZXhwIjoxNzgzMjQxMDA0fQ.D3qu0dtvkqxELkxwKeBxKYZepVLuly77GiVTTkrMgas';

  try {
    const response = await fetch('https://api.kanma.in/contact', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Contact API error:", error);
    return { status: "error", message: "Something went wrong. Please try again later." };
  }
}
