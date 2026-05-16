import Card from "./components/Card";
import sedanIcon from "/images/icon-sedans.svg";
import suvIcon from "/images/icon-suvs.svg";
import luxuryIcon from "/images/icon-luxury.svg";

function App() {
  return (
    <div className="min-h-screen bg-gray flex items-center justify-center p-4 md:p-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-0">
        <Card
          title="Sedans"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          image={sedanIcon}
          color="gold"
        />
        <Card
          title="SUVs"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          image={suvIcon}
          color="cyan"
        />
        <Card
          title="Luxury"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          image={luxuryIcon}
          color="green"
        />
      </div>
    </div>
  );
}

export default App;
