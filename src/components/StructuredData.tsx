export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PomodoroFocus Timer",
    description:
      "An online Pomodoro timer to help you stay focused and productive using the Pomodoro Technique.",
    url: "https://pomodorofocus.co",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Customizable focus and break durations",
      "Audio notifications",
      "Dark mode support",
      "Simple and clean interface",
      "No registration required",
    ],
    about: {
      "@type": "Thing",
      name: "Pomodoro Technique",
      description:
        "A time management method developed by Francesco Cirillo that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
