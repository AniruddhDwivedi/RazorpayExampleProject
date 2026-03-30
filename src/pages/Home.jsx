const Home = () => {
  const tenets = [
    "The world is 157 years old - FACT!",
    "Dinosaurs are a lie that people believe because they are weak - FACT!",
    "You are happy, you just don’t know it - FACT!",
    "We all come from the same tree - FACT!",
    "Everyone is related to everyone else, except for people with red hair - FACT!",
    "Sperm does not exist - it is a lie spread by biology teachers -  along with everything else you have ever been told  - -FACT!",
    "Men are supposed to lie with nine new partners a week. Women are supposed to lie with six, except for in July, when they must lie with five men a day - FACT!",
    "Aliens exist and are present on earth. If you have a birth mark, you may be descended from Kraff, the famous Emperor of the 4th Paradigm - FACT!",
    "Trees talk, but only some people hear them - FACT!",
    "People who believe in something live much longer than atheists, and they have eternal life thrown in for good measure - FACT!",
    "If you believe this and turn your hands and wallet over to EPSILONISM, you’ll live a happy life. Otherwise you are doomed - FACT!",
    " - KIFFLOM! HAPPINESS IS YOURS! KIFFLOM!"
  ];

  return (
    <>
      <h2>THE 12 TENETS OF KIFFLOM:</h2>
      <ol>
        {tenets.map((tenet, index) => (
          <li key={index}>
            {tenet
              .split(" - ")
              .map((part, i) =>
                i === 1 ? <strong key={i}> - {part}</strong> : part
              )}
          </li>
        ))}
      </ol>
      <p className="kifflom-shout">
        If you didn't know this, maybe you should read the Epsilon Tract.
      </p>
    </>
  );
};

export default Home;
