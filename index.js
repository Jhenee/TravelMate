// Real-Time Language Translation
document.getElementById('translate-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const selectedLanguage = document.getElementById('language-select').value;
  
    if (!inputText) {
      alert('Please enter text to translate.');
      return;
    }
  
    // Mock translation function (replace with an API call)
    const translatedText = translateText(inputText, selectedLanguage);
    document.getElementById('translated-text').innerText = translatedText;
  });
  
  function translateText(text, language) {
    // Mock translations for demonstration
    const translations = {
      en: `Translated (English): ${text}`,
      es: `Traducido (Español): ${text}`,
      fr: `Traduit (Français): ${text}`,
      de: `Übersetzt (Deutsch): ${text}`,
      zh: `翻译 (中文): ${text}`,
    };
    return translations[language] || 'Translation not available.';
  }
  
  // Itinerary Management
  document.getElementById('add-event').addEventListener('click', function () {
    const eventName = document.getElementById('event-name').value;
    const eventTime = document.getElementById('event-time').value;
  
    if (!eventName || !eventTime) {
      alert('Please fill in both event name and time.');
      return;
    }
  
    // Create a new list item for the event
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `
      <span>${eventName}</span>
      <span>${new Date(eventTime).toLocaleString()}</span>
    `;
  
    // Add the event to the itinerary list
    document.getElementById('itinerary-list').appendChild(eventItem);
  
    // Clear input fields
    document.getElementById('event-name').value = '';
    document.getElementById('event-time').value = '';
  });
  
  // Cultural Insights
  document.getElementById('get-insights').addEventListener('click', function () {
    // Mock location-based insights (replace with an API call)
    const insights = getCulturalInsights();
    document.getElementById('insights-display').innerText = insights;
  });
  
  function getCulturalInsights() {
    // Mock insights for demonstration
    const insights = [
      "In Japan, it's polite to bow when greeting someone.",
      "In Italy, dinner is often eaten late, around 8 PM or later.",
      "In India, it's customary to remove your shoes before entering someone's home.",
      "In Brazil, people often greet each other with a kiss on the cheek.",
      "In France, bread is a staple at every meal.",
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  }